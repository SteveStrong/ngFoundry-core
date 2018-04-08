import { ModuleWithProviders } from '@angular/core';
export * from 'foundry/foAttribute.model';
export * from './foundry/foBitwise';
export * from './foundry/foBuffer';
export * from './foundry/foChange';
export * from './foundry/foCollection.model';
export * from './foundry/foComponent.model';
export * from './foundry/foConcept.model';
export * from './foundry/foController';
export * from './foundry/foDataType.model';
export * from './foundry/foDictionaries';
export * from './foundry/foDictionary.model';
export * from './foundry/foFileManager';
export * from './foundry/foGlyph.model';
export * from './foundry/foHandle';
export * from './foundry/foHydrationManager';
export * from './foundry/foInstance.model';
export * from './foundry/foInterface';
export * from './foundry/foKnowledge.model';
export * from './foundry/foLibrary.model';
export * from './foundry/foLifecycle';
export * from './foundry/foMethod.model';
export * from './foundry/foModel.model';
export * from './foundry/foNode.model';
export * from './foundry/foObject.model';
export * from './foundry/foProperty.model';
export { foPubSub } from './foundry/foPubSub';
export * from './foundry/foRuntimeType';
export * from './foundry/foSolution.model';
export * from './foundry/foStencil';
export * from './foundry/foStructure.model';
export * from './foundry/foTemplate.model';
export * from './foundry/foTools';
export * from './foundry/foUnDo';
export * from './foundry/foWeakCache';
export * from './foundry/foWorkspace.model';
export declare class FoundryModule {
    static forRoot(): ModuleWithProviders;
}