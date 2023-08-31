import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  templateUrl: './stopwatch.component.html',
  styleUrls: ['./stopwatch.component.css']
})
export class StopwatchComponent {
  starting:boolean=false;
  counter:number=0;
  start(){
    this.starting=true;
    let time=setInterval(()=>{
      if(this.starting===false){
        clearInterval(time)
      }
      this.counter=this.counter+1
    },100)
  }
  stop(){
    this.starting=false
  }
  Reset(){
    this.counter=0
  }
}
