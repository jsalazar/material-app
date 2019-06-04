import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoMaterialModule } from '../core/material.module';
import { FormsComponent } from './forms.component';
import { FormsRoutingModule } from './forms-routing.module';


@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    // FormsModule, ReactiveFormsModule,
    DemoMaterialModule,
    FormsRoutingModule
  ],
  exports: [FormsComponent]
})
export class FormsModuleDemo { }
