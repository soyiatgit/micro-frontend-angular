import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SummaryRoutingModule } from './summary-routing.module';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [
    SummaryComponent
  ],
  imports: [
    CommonModule,
    SummaryRoutingModule,
    CardModule
  ]
})
export class SummaryModule { }
