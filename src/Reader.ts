import WebManifest from './Model/WebManifest';
import WebManifestIcon from './Model/WebManifestIcon';

export default class Reader {
  private manifestData?: WebManifest|Error;

  public async read(): Promise<WebManifest | null> {
    if (this.manifestData !== undefined) {
      if (this.manifestData instanceof Error) {
        throw this.manifestData;
      }

      return this.manifestData;
    }

    const manifestPath = this.getManifestPath();

    if (!manifestPath) {
      throw new Error('No manifest declaration found.');
    }

    try {
      this.manifestData = await this.getManifestContent(manifestPath);
    } catch (e) {
      this.manifestData = e;
      throw e;
    }

    return this.manifestData;
  }

  private async getManifestContent(manifestPath: string): Promise<WebManifest | Error> {
    const response = await fetch(manifestPath);
    return await response.json();
  }

  private getManifestPath(): string | null {
    const manifestEl: HTMLLinkElement = document.head.querySelector('link[rel="manifest"]');

    return manifestEl ? manifestEl.href : null;
  }
}
