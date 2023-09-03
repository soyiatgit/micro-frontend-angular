import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { CommonModule } from '@angular/common';
import { DetailModule } from './detail/detail.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    DetailModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
