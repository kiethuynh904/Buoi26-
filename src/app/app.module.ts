import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BaitapNgIfModule} from './baitap-ng-if/baitap-ng-if.module';
import { AppComponent } from './app.component';
// import { Bt1LayoutComponent } from './bt1-layout/bt1-layout.component';
// import { Bt1HeaderComponent } from './bt1-layout/bt1-header/bt1-header.component';
// import { Bt1ContentsComponent } from './bt1-layout/bt1-contents/bt1-contents.component';
// import { Bt1SlidebarComponent } from './bt1-layout/bt1-slidebar/bt1-slidebar.component';
// import { Bt1FooterComponent } from './bt1-layout/bt1-footer/bt1-footer.component';
// import { Bai2LayoutComponent } from './bai2-layout/bai2-layout.component';
// import { Bt2HeaderComponent } from './bai2-layout/bt2-header/bt2-header.component';
// import { Bt2CarouselComponent } from './bai2-layout/bt2-carousel/bt2-carousel.component';
// import { Bt2FooterComponent } from './bai2-layout/bt2-footer/bt2-footer.component';
// import { Bt2ContentsComponent } from './bai2-layout/bt2-contents/bt2-contents.component';
// import { Bt2ItemComponent } from './bai2-layout/bt2-contents/bt2-item/bt2-item.component';
// import {Bai2LayoutModule} from './bai2-layout/bai2-layout-module';
import {DataBindingModule} from './data-binding/data-binding.module';
import {StructuralDirectivesModule} from './structural-directives/structural-directives.module';
import {AttributeDirectiveModule} from './attribute-directive/attribute-directive.module';
import {BaitapNgforNgclassModule} from './baitap-ngfor-ngclass/baitap-ngfor-ngclass.module';
import {NgContentModule} from './ng-content/ng-content.module';
import{InteractionModule} from './interaction/interaction.module';
import {BaiTapXeBusModule} from './bai-tap-xe-bus/bai-tap-xe-bus.module';
@NgModule({
  declarations: [
    AppComponent,
    // Bt1LayoutComponent,
    // Bt1HeaderComponent,
    // Bt1ContentsComponent,
    // Bt1SlidebarComponent,
    // Bt1FooterComponent,
    // Bai2LayoutComponent,
    // Bt2HeaderComponent,
    // Bt2CarouselComponent,
    // Bt2FooterComponent,
    // Bt2ContentsComponent,
    // Bt2ItemComponent
  ],
  imports: [
    BrowserModule,
    DataBindingModule,
    StructuralDirectivesModule,
    BaitapNgIfModule,
    AttributeDirectiveModule,
    BaitapNgforNgclassModule,
    NgContentModule,
    InteractionModule,
    BaiTapXeBusModule
    // Bai2LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
