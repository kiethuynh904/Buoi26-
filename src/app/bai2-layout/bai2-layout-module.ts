import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Bai2LayoutComponent } from "./bai2-layout.component"
import {Bt2HeaderComponent} from "./bt2-header/bt2-header.component"
import {Bt2CarouselComponent} from "./bt2-carousel/bt2-carousel.component"
import {Bt2ContentsComponent} from "./bt2-contents/bt2-contents.component"
import {Bt2ItemComponent} from "./bt2-contents/bt2-item/bt2-item.component"
import {Bt2FooterComponent} from "./bt2-footer/bt2-footer.component"

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Bai2LayoutComponent,
    Bt2HeaderComponent,
    Bt2CarouselComponent,
    Bt2ContentsComponent,
    Bt2ItemComponent,
    Bt2FooterComponent,
  ]
})
export class Bai2LayoutModule { }
