import WebManifestIcon from './WebManifestIcon';
export default interface WebManifest {
    name?: string;
    short_name?: string;
    start_url?: string;
    display?: string;
    description?: string;
    dir?: string;
    lang?: string;
    orientation?: string;
    scope?: string;
    theme_color?: string;
    icons?: WebManifestIcon[];
    [key: string]: any;
}
