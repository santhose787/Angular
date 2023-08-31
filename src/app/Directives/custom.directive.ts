import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {
 @Input() oldcolor:string='blue'
  @HostBinding('style.color') color!:string;
  constructor( public er:ElementRef,rend:Renderer2 ) { 
    // er.nativeElement.style.color='red'
  }
  ngOnInit(){
    
  }
@HostListener('mouseenter') onMouseEnter(){
    this.highlight('yellow')
    // this.color='yellow'
}
@HostListener('mouseleave') onMouseleave(): void{
  this.highlight('black')
}
@HostListener('click') Click(){
  this.highlight('blue')
}
highlight(color:string ){
  this.er.nativeElement.style.color=color
}

}
