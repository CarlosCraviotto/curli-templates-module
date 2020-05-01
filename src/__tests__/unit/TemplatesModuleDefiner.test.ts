import chai = require('chai');
//import { ImportMock } from 'ts-mock-imports';

import {TemplatesModuleDefiner} from '../../TemplatesModuleDefiner';
import {
    CurliApplication,
    DependencyInjection,
    DependencyInjectionMock,
    CurliApplicationMock
} from 'curli-types';
let templatesModuleDefiner: TemplatesModuleDefiner;
let curliApplication: CurliApplication;
let container: DependencyInjection;

describe('TemplatesModuleDefiner class tests', function () {

    beforeEach(() => {
        curliApplication = new CurliApplicationMock();
        container = new DependencyInjectionMock();
        curliApplication.setContainer(container);
        templatesModuleDefiner = new TemplatesModuleDefiner(curliApplication);
    });

    it('Should return right static values', function () {
        chai.assert.deepEqual('registerTemplates', templatesModuleDefiner.getMethodName());
        chai.assert.deepEqual('TemplatesModuleDefiner', templatesModuleDefiner.getName());
        chai.assert.deepEqual('before:start', templatesModuleDefiner.whenCallMethodInModules());
    });


//    it('Should throw an error if the TemplatesModuleDefiner', function () {
//        chai.assert.throws(function () {
//            templatesModuleDefiner.otherMehotd();
//        }, 'Unexpected end of JSON input');
//    });

});
