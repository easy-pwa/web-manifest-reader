import WebManifest from "./Model/WebManifest";
export default class WebManifestReader {
    private manifestData?;
    test(): void;
    read(): Promise<WebManifest>;
    private getManifestContent;
    private getManifestPath;
    private deserialize;
    private getStringProperty;
}
