/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { foAttribute } from './foundry/foAttribute.model';
import { foBitwise } from './foundry/foBitwise';
import { foCollection } from './foundry/foCollection.model';
import { foConcept } from './foundry/foConcept.model';
import { foController } from './foundry/foController';
import { foDataType } from './foundry/foDataType.model';
import { foDictionary } from './foundry/foDictionary.model';
import { foFileManager } from './foundry/foFileManager';
import { foGlyph } from './foundry/foGlyph.model';
import { foHandle } from './foundry/foHandle';
import { foHydrationManager } from './foundry/foHydrationManager';
import { foInstance } from './foundry/foInstance.model';
import { foKnowledge } from './foundry/foKnowledge.model';
import { foLibrary } from './foundry/foLibrary.model';
import { foLifecycle } from './foundry/foLifecycle';
import { foMethod } from './foundry/foMethod.model';
import { foModel } from './foundry/foModel.model';
import { foNode } from './foundry/foNode.model';
import { foObject } from './foundry/foObject.model';
import { foProperty } from './foundry/foProperty.model';
import { foPubSub } from './foundry/foPubSub';
import { foRuntimeType } from './foundry/foRuntimeType';
import { foSolution } from './foundry/foSolution.model';
import { foStencilLibrary } from './foundry/foStencil';
import { foStructure } from './foundry/foStructure.model';
import { foTemplate } from './foundry/foTemplate.model';
import { foTools } from './foundry/foTools';
import { foUnDo } from './foundry/foUnDo';
import { foWorkspace } from './foundry/foWorkspace.model';
export { foAttribute, foViewAttribute } from './foundry/foAttribute.model';
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
export { foPubSub, PubSub } from './foundry/foPubSub';
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
                    foAttribute,
                    foBitwise,
                    foCollection,
                    foConcept,
                    foController,
                    foDataType,
                    foDictionary,
                    foFileManager,
                    foGlyph,
                    foHandle,
                    foHydrationManager,
                    foInstance,
                    foKnowledge,
                    foLibrary,
                    foLifecycle,
                    foMethod,
                    foModel,
                    foNode,
                    foObject,
                    foProperty,
                    foPubSub,
                    foRuntimeType,
                    foSolution,
                    foStencilLibrary,
                    foStructure,
                    foTemplate,
                    foTools,
                    foWorkspace,
                    foUnDo
                ],
                exports: [
                    foAttribute,
                    foBitwise,
                    foCollection,
                    foConcept,
                    foController,
                    foDataType,
                    foDictionary,
                    foFileManager,
                    foGlyph,
                    foHandle,
                    foHydrationManager,
                    foInstance,
                    foKnowledge,
                    foLibrary,
                    foLifecycle,
                    foMethod,
                    foModel,
                    foNode,
                    foObject,
                    foProperty,
                    foPubSub,
                    foRuntimeType,
                    foSolution,
                    foStencilLibrary,
                    foStructure,
                    foTemplate,
                    foTools,
                    foWorkspace,
                    foUnDo
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
