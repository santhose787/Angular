import { AfterViewChecked, AfterViewInit, Component,  Input, OnChanges, OnInit, SimpleChanges,ViewChild } from '@angular/core';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnChanges,OnInit,AfterViewInit,AfterViewChecked {
@Input() inputs!:string;
@Input() names!:string;
@Input() messages!:string
@ViewChild(ViewchildComponent) input!:ViewchildComponent
bala:string='bala'
message:string=''
name:string=''
ngOnChanges(): void {
  this.message="Changed Input Is="+this.inputs
  console.log('onchanges');
  
}
ngOnInit(): void {
  console.log('oninit')
}

ngAfterViewInit(): void {
  setTimeout(() => {
    this.name = this.input.name;
  });
  
}
ngAfterViewChecked(): void {
  console.log('checked')
}

}
