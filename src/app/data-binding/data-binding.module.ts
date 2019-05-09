import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './data-binding.component';
import { OnewayBindingComponent } from './oneway-binding/oneway-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import {FormsModule} from "@angular/forms";
import { BaiTapBinding1Component } from './bai-tap-binding1/bai-tap-binding1.component';
@NgModule({
  declarations: [DataBindingComponent, OnewayBindingComponent, TwowayBindingComponent, BaiTapBinding1Component],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    DataBindingComponent,
    OnewayBindingComponent,
    TwowayBindingComponent,
    BaiTapBinding1Component
  ]
})
export class DataBindingModule { }
