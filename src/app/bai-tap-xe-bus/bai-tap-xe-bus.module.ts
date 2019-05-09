import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaiTapXeBusComponent } from './bai-tap-xe-bus.component';
import { ItemGheComponent } from './item-ghe/item-ghe.component';

@NgModule({
  declarations: [BaiTapXeBusComponent, ItemGheComponent],
  imports: [
    CommonModule
  ],
  exports:[
    BaiTapXeBusComponent,
  ]
})
export class BaiTapXeBusModule { }
