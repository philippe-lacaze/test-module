import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './modal/modal.component';
import {ModalService} from './modal/modal.service';
import {MessageComponent} from './message/message.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [ModalComponent, MessageComponent],
  declarations: [ModalComponent, MessageComponent]
})
export class StaticCoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: StaticCoreModule,
      providers: [
        {provide: 'messageService', useClass: ModalService}
      ]
    };
  }

  static forChild(): ModuleWithProviders {
    return {
      ngModule: StaticCoreModule
    };
  }
}


@NgModule({
  imports: [
    CommonModule,
    StaticCoreModule.forRoot()
  ],
  exports: [ModalComponent, MessageComponent]
})
export class CoreModule {
}
