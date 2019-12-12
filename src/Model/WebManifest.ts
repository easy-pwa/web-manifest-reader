import WebManifestIcon from './WebManifestIcon';

export default class WebManifest {
  public name?: string;

  public shortName?: string;

  public startUrl?: string;

  public display?: string;

  public description?: string;

  public dir?: string;

  public lang?: string;

  public orientation?: string;

  public scope?: string;

  public themeColor?: string;

  public icons?: WebManifestIcon[];
}
