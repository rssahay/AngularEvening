import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverhighlighter]'
})
export class HoverhighlighterDirective {

  @Input() highlightColor =''

  constructor(private el :ElementRef) {

   // el.nativeElement.style.color = 'yellow'

   }

   @HostListener('mouseenter') onmouseEnter(){
    this.el.nativeElement.style.color = 'red'
   }

   @HostListener('mouseleave') onmouseExit(){
    this.el.nativeElement.style.color = 'green'
   }

}
