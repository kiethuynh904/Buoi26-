import { Directive, ElementRef, Renderer2, HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighLightDirective]'
})
export class HighLightDirectiveDirective {

  constructor(private ele: ElementRef, private renderer2: Renderer2) {
    // this.ele.nativeElement.style.backgroundColor = "green"
    this.renderer2.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }
  @HostBinding('style.backgroundColor') bgColor:string = "pink"
  @HostListener('mouseenter') SuKienHover() {
    this.renderer2.setStyle(this.ele.nativeElement, 'background-color', 'yellow');
  }
  @HostListener('mouseleave') SuKienLeaveHover() {
    this.renderer2.setStyle(this.ele.nativeElement, 'background-color', 'green');
  }
}
