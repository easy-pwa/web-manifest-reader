import WebManifest from './Model/WebManifest';

export default class Reader {
  public static readonly STORAGE_KEY = '__web_manifest_reader_storage';

  public static readonly PWA_COMPAT_STORAGE_KEY = '__pwacompat_manifest';

  private readonly internalStorage: Storage;

  constructor() {
    this.internalStorage = window.sessionStorage;
  }

  /**
   * Check if a manifest file is declared
   */
  public exists(): boolean {
    return this.getManifestPath() !== null;
  }

  /**
   * Read with a callback
   * @param callback callback to execute when manifest is read. Manifest content if it's a success, null otherwise.
   */
  public readCallback(callback: (data: WebManifest | null, error: Error | null) => void): void {
    this.read()
      .then(data => {
        callback(data, null);
      })
      .catch(e => {
        callback(null, e);
      });
  }

  /**
   * Read with a promise
   * @return A promise with the manifest content or null if an error has occurred.
   */
  public async read(): Promise<WebManifest | null> {
    const cachedManifest = this.getContentFromCache();
    if (cachedManifest) {
      return cachedManifest;
    }

    const manifestPath = this.getManifestPath();

    if (!manifestPath) {
      throw new Error('No manifest declaration found.');
    }

    const manifestData = await this.getManifestContent(manifestPath);
    this.storeContentInCache(manifestData);

    return manifestData;
  }

  /**
   * Fetch and parse to json manifest file
   * @param manifestPath
   */
  private async getManifestContent(manifestPath: string): Promise<WebManifest> {
    const response = await fetch(manifestPath);
    if (response.status !== 200) {
      throw new Error('Impossible to get the manifest content.');
    }

    return await response.json();
  }

  /**
   * Get the manifest path
   */
  private getManifestPath(): string | null {
    const manifestEl: HTMLLinkElement = document.head.querySelector('link[rel="manifest"]');

    return manifestEl ? manifestEl.href : null;
  }

  /**
   * Get content from session storage. If a PwaCompat cache exists, use it.
   */
  private getContentFromCache(): WebManifest | null {
    const pwaCompatCache = this.extractCachedContent(Reader.PWA_COMPAT_STORAGE_KEY);
    if (pwaCompatCache) {
      return pwaCompatCache;
    }

    const webManifestReaderCache = this.extractCachedContent(Reader.STORAGE_KEY);
    if (webManifestReaderCache) {
      return webManifestReaderCache;
    }

    return null;
  }

  /**
   * Extract cache from session storage
   * @param key
   */
  private extractCachedContent(key: string): WebManifest | null {
    const content = this.internalStorage.getItem(key);

    if (content) {
      try {
        return JSON.parse(content);
      } catch {}
    }

    return null;
  }

  /**
   * Store cache in session storage
   * @param content
   */
  private storeContentInCache(content: WebManifest): void {
    this.internalStorage.setItem(Reader.STORAGE_KEY, JSON.stringify(content));
  }
}
