
import { Component,EventEmitter,Input,Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  encapsulation:ViewEncapsulation.ShadowDom
})
export class ChildComponent {
  @Output() increaseValue=new EventEmitter<number>()
  @Output() server1Created=new EventEmitter<{ServerCreated1:string,ServerCreated2:string}>
  @Input() arr:any=[]
counterValue=0;
server1=''
server2=''
  increase(){
    this.counterValue++;
    this.increaseValue.emit(this.counterValue)
  }
  addServer(){
      this.server1Created.emit(
        {ServerCreated1:this.server1,
        ServerCreated2:this.server2})
  }
}
