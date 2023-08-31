import { Component, ContentChild, ElementRef,AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent {
  @ContentChild('head') head!:ElementRef
num:number=0
name:string='santhosh'
ngAfterContentInit(){
this.head.nativeElement.style.color='blue';
this.head.nativeElement.style.backgroundColor='yellow'
}
increases(){
  return this.num++;
}
decrease(){
  this.num--;
}
}
