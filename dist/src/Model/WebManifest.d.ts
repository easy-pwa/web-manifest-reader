import WebManifestIcon from './WebManifestIcon';
export default class WebManifest {
    name?: string;
    shortName?: string;
    startUrl?: string;
    display?: string;
    description?: string;
    dir?: string;
    lang?: string;
    orientation?: string;
    scope?: string;
    themeColor?: string;
    icons?: WebManifestIcon[];
}
