/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { foAttribute } from './foundry/foAttribute.model';
export { foAttribute, foViewAttribute } from 'foundry/foAttribute.model';
export { foBitwise } from './foundry/foBitwise';
export { foBuffer, foCopyPasteBuffer, foHandleBuffer, foSelectionBuffer } from './foundry/foBuffer';
export { foChangeEvent, foChangeEventLock, ChangeLock, foChange, BroadcastChange } from './foundry/foChange';
export { foCollection } from './foundry/foCollection.model';
export { foComponent } from './foundry/foComponent.model';
export { foSubComponentSpec, foConcept, foProjection } from './foundry/foConcept.model';
export { foController } from './foundry/foController';
export { foDataType, textType, numberType, booleanType, yesno, timeType, dateType, yearType, resource, urlType, anyType, foDataTools, DataTools } from './foundry/foDataType.model';
export { SolutionDictionary, StructureDictionary, ConceptDictionary, ContextDictionary, PropertyDictionary, ActionDictionary, FactoryDictionary } from './foundry/foDictionaries';
export { foDictionary } from './foundry/foDictionary.model';
export { clientStorage, fileSpec, foFileManager } from './foundry/foFileManager';
export { foGlyph } from './foundry/foGlyph.model';
export { foHandle } from './foundry/foHandle';
export { foHydrationManager } from './foundry/foHydrationManager';
export { foInstance } from './foundry/foInstance.model';
export { foKnowledge } from './foundry/foKnowledge.model';
export { foLibrary } from './foundry/foLibrary.model';
export { foLifecycleEvent, foLifecycleEventLock, LifecycleLock, KnowcycleLock, foLifecycle, Lifecycle, Knowcycle } from './foundry/foLifecycle';
export { foMethod, foFactory } from './foundry/foMethod.model';
export { foModel, foContext } from './foundry/foModel.model';
export { foNode } from './foundry/foNode.model';
export { using, foObject } from './foundry/foObject.model';
export { foProperty } from './foundry/foProperty.model';
export { foPubSub } from './foundry/foPubSub';
export { foRuntimeType, RuntimeType } from './foundry/foRuntimeType';
export { foAltStructureSpec, foSubSolutionSpec, foSolution } from './foundry/foSolution.model';
export { foStencilLibrary, Stencil } from './foundry/foStencil';
export { foSubStructureSpec, foStructure } from './foundry/foStructure.model';
export { foTemplate } from './foundry/foTemplate.model';
export { foNames, foTools, Tools } from './foundry/foTools';
export { foUnDo, globalUnDo } from './foundry/foUnDo';
export { foWeakCache, foWeakMap, foPropSaver } from './foundry/foWeakCache';
export { LibraryDictionary, ModelDictionary, foWorkspace, globalWorkspace } from './foundry/foWorkspace.model';
export class FoundryModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: FoundryModule,
            providers: []
        };
    }
}
FoundryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    foAttribute
                ],
                exports: [
                    foAttribute
                ]
            },] },
];
function FoundryModule_tsickle_Closure_declarations() {
    /** @type {!Array<{type: !Function, args: (undefined|!Array<?>)}>} */
    FoundryModule.decorators;
    /**
     * @nocollapse
     * @type {function(): !Array<(null|{type: ?, decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>)})>}
     */
    FoundryModule.ctorParameters;
}
