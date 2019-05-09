import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectiveComponent } from './attribute-directive.component';
import { NgClassComponent } from './ng-class/ng-class.component';
import { NgStyleComponent } from './ng-style/ng-style.component';
import { HighLightDirectiveDirective } from './high-light-directive.directive';


@NgModule({
  declarations: [AttributeDirectiveComponent, NgClassComponent, NgStyleComponent, HighLightDirectiveDirective, ],
  imports: [
    CommonModule
  ],
  exports:[
    AttributeDirectiveComponent,
    NgClassComponent,
    NgStyleComponent,
    HighLightDirectiveDirective
    
  ]
})
export class AttributeDirectiveModule { }
