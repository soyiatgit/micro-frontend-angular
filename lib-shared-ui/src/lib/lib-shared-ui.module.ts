import { NgModule } from '@angular/core';
import { LibSharedUiComponent } from './lib-shared-ui.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    LibSharedUiComponent
  ],
  imports: [
    // BrowserAnimationsModule,
    // TabMenuModule
  ],
  exports: [
    LibSharedUiComponent,
    // BrowserAnimationsModule,
    // TabMenuModule
  ]
})
export class LibSharedUiModule { }
