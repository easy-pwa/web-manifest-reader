import WebManifest from './Model/WebManifest';
import WebManifestIcon from './Model/WebManifestIcon';

export default class Reader {
  private manifestData?: WebManifest;

  public async read(): Promise<WebManifest | null> {
    if (this.manifestData !== undefined) {
      return this.manifestData;
    }

    const manifestPath = this.getManifestPath();

    if (!manifestPath) {
      throw new Error('No manifest declaration found.');
    }

    try {
      const manifestContent = await this.getManifestContent(manifestPath);
      this.manifestData = this.deserialize(manifestContent);
    } catch (e) {
      this.manifestData = null;
    }

    return this.manifestData;
  }

  private async getManifestContent(manifestPath: string): Promise<JSON | Error> {
    const response = await fetch(manifestPath);
    return await response.json();
  }

  private getManifestPath(): string | null {
    const manifestEl: HTMLLinkElement = document.head.querySelector('link[rel="manifest"]');

    return manifestEl ? manifestEl.href : null;
  }

  private deserialize(data: any): WebManifest {
    const wmd = new WebManifest();

    wmd.name = this.getStringProperty(data, 'name');
    wmd.shortName = this.getStringProperty(data, 'short_name');
    wmd.startUrl = this.getStringProperty(data, 'start_url');
    wmd.display = this.getStringProperty(data, 'display');
    wmd.description = this.getStringProperty(data, 'description');
    wmd.dir = this.getStringProperty(data, 'dir');
    wmd.lang = this.getStringProperty(data, 'lang');
    wmd.orientation = this.getStringProperty(data, 'orientation');
    wmd.scope = this.getStringProperty(data, 'scope');
    wmd.themeColor = this.getStringProperty(data, 'theme_color');

    if ('icons' in data && Array.isArray(data.icons)) {
      wmd.icons = [];
      data.icons.forEach((iconData: any) => {
        const webManifestIcon = new WebManifestIcon();
        webManifestIcon.src = iconData.src || null;
        webManifestIcon.sizes = iconData.sizes || null;
        webManifestIcon.type = iconData.type || null;
        wmd.icons.push(webManifestIcon);
      });
    }

    return wmd;
  }

  private getStringProperty(data: any, property: string): string | null {
    if (!(property in data)) {
      return null;
    }

    return data[property];
  }
}
