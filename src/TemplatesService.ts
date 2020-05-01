import {PathOfTemplates} from "./PathOfTemplates";
import {FileListLoaderConfig, FileListLoader} from "file-list-loader";
import {compile} from "handlebars";

export class TemplatesService {

    private fileListLoader: FileListLoader;

    public constructor(
        templateExtension: Array<string>,
        useFilePathInId: boolean
    ) {
        const config: FileListLoaderConfig = {
            extensions: templateExtension,
            useFilePathInId: useFilePathInId
        };
        this.fileListLoader = new FileListLoader(config);
    }

    public async registerPath(path: PathOfTemplates){
        await this.fileListLoader.addPaths(path);
    }

    public async compile(templateId: string, data?: {[key:string]: any}){
        const templateContent = await this.fileListLoader.getFileContent(templateId);
        const template = compile(templateContent);
        return template(data);
    }
}