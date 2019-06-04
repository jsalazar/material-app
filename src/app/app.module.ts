import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { MatToolbarModule } from '@angular/material/toolbar'
// import { MatCardModule } from '@angular/material/card';

import { DemoMaterialModule } from './core/material.module';
import { HomeModule } from './home/home.module';
import { FormsModuleDemo } from './forms/forms.module';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent, BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog } from './app.component';





@NgModule({
  declarations: [
    AppComponent,
    BottomSheetOverviewExampleSheet,
    DialogOverviewExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    // MatToolbarModule,
    // MatCardModule,
    FormsModule, ReactiveFormsModule,
    DemoMaterialModule,
    HomeModule,
    FormsModuleDemo,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [BottomSheetOverviewExampleSheet, DialogOverviewExampleDialog],
  bootstrap: [AppComponent]
})
export class AppModule { }
