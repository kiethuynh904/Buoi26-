import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaitapNgIfComponent } from './baitap-ng-if.component';
import {FormsModule} from '@angular/forms'
@NgModule({
  declarations: [BaitapNgIfComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    BaitapNgIfComponent,
  ]
})
export class BaitapNgIfModule { }
