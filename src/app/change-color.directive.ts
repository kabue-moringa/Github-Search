import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private elem: ElementRef) { }

  @HostListener('click') onClicks(){
    this.textDeco('yellow');
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("green")
  }
  private textDeco(action: string){
    this.elem.nativeElement.style.color = action;
  }

}
