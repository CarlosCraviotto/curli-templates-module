import {ModulesDefiner, Module, ApplicationEvents, CurliApplication, DependencyInjection} from 'curli-types';
import {TemplatesService} from "./TemplatesService";

const TEMPLATE_EXTENSIONS_PROPERTY_NAME = '@TEMPLATE_EXTENSIONS';
const TEMPLATE_USE_FILE_PATH_IN_ID_PROPERTY_NAME = '@TEMPLATE_USE_FILE_PATH_IN_ID';


export class TemplatesModuleDefiner implements ModulesDefiner {

    private container: DependencyInjection | undefined;
    private templatesService: TemplatesService | undefined;

    public constructor(private app: CurliApplication) {
    }

    getName(): string {
        return "TemplatesModuleDefiner";
    }

    beforeCallModules(): void {
        this.container = this.app.getContainer();
        this.container.registerService(
            'templates',
            [
                TEMPLATE_EXTENSIONS_PROPERTY_NAME,
                TEMPLATE_USE_FILE_PATH_IN_ID_PROPERTY_NAME
            ],
            TemplatesService
        );

        this.templatesService = this.container.get('templates');
    }

    callMethodInModules(module: Module): void {
        module.registerTemplates(this.templatesService);
    }

    afterCallModules(): void {
    }

    getMethodName(): string {
        return "registerTemplates";
    }

    whenCallMethodInModules(): ApplicationEvents {
        return 'before:start';
    }
}