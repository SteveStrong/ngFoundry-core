import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';



import { foAttribute } from './foundry/foAttribute.model';
import { foBitwise } from './foundry/foBitwise';
import { foCopyPasteBuffer, foHandleBuffer, foSelectionBuffer } from './foundry/foBuffer';
import { foChange } from './foundry/foChange';
import { foCollection } from './foundry/foCollection.model';
import { foComponent } from './foundry/foComponent.model';
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
import { foNames, foTools } from './foundry/foTools';
import { foUnDo } from './foundry/foUnDo';
import { foWeakCache, foWeakDictionary } from './foundry/foWeakCache';
import { foWorkspace } from './foundry/foWorkspace.model';



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


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    foAttribute
  ],
  exports: [
    foAttribute
  ]
})
export class FoundryModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FoundryModule,
      providers: []
    };
  }
}
