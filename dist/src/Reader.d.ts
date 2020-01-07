import WebManifest from './Model/WebManifest';
export default class Reader {
    static readonly STORAGE_KEY = "__web_manifest_reader_storage";
    static readonly PWA_COMPAT_STORAGE_KEY = "__pwacompat_manifest";
    private readonly internalStorage;
    constructor();
    /**
     * Check if a manifest file is declared
     */
    exists(): boolean;
    /**
     * Read with a callback
     * @param callback callback to execute when manifest is read. Manifest content if it's a success, null otherwise.
     */
    readCallback(callback: (data: WebManifest | null) => void): void;
    /**
     * Read with a promise
     * @return A promise with the manifest content or null if an error has occurred.
     */
    read(): Promise<WebManifest | null>;
    /**
     * Fetch and parse to json manifest file
     * @param manifestPath
     */
    private getManifestContent;
    /**
     * Get the manifest path
     */
    private getManifestPath;
    /**
     * Get content from session storage. If a PwaCompat cache exists, use it.
     */
    private getContentFromCache;
    /**
     * Extract cache from session storage
     * @param key
     */
    private extractCachedContent;
    /**
     * Store cache in session storage
     * @param content
     */
    private storeContentInCache;
}
