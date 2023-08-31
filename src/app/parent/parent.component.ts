import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  counter=0;
  servers=[{Servers1:'',Servers2:''}]
  counters(newValue:number):void{
    this.counter=newValue
  }
  onServer(serverData:{ServerCreated1:string,ServerCreated2:string}){
    this.servers.push({Servers1:serverData.ServerCreated1, Servers2:serverData.ServerCreated2})
  }
}
