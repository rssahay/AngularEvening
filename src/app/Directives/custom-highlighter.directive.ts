import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustomHighlighter]'
})
export class CustomHighlighterDirective {

  constructor(public el: ElementRef) { 

   
  }

  @HostListener('mouseenter') UsermouseEnter(){
   
    this.el.nativeElement.style.backgroundColor = 'red'
  }

  @HostListener('mouseleave') userMouseLeave(){
    console.log("Mouse moved out of the region")
    this.el.nativeElement.style.backgroundColor = ''
  }

}
