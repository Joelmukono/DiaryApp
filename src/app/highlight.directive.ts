import { Directive, ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private eleRef: ElementRef){}

  textHighlight(Action:string){
    this.eleRef.nativeElement.style.background = Action;

  }

  @HostListener("click") onClicks(){
    this.textHighlight("red")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textHighlight("None")
  }

}
