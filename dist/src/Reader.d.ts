import WebManifest from './Model/WebManifest';
export default class Reader {
    private manifestData?;
    read(): Promise<WebManifest | null>;
    private getManifestContent;
    private getManifestPath;
    private deserialize;
    private getStringProperty;
}
