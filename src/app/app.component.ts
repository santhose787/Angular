import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnChanges, ViewChild,ViewEncapsulation,DoCheck, ViewChildren, QueryList, ContentChild } from '@angular/core';
import {ViewchildComponent} from'../app/viewchild/viewchild.component'
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { CustomDirective } from './Directives/custom.directive';
import { LifecycleComponent } from './lifecycle/lifecycle.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation:ViewEncapsulation.ShadowDom
  
})
export class AppComponent  {
 @ViewChild(ViewchildComponent) input={} as ViewchildComponent
 @ViewChild(StopwatchComponent) watch!:StopwatchComponent
 @ViewChild('inputs',{static:false}) inputs!:ElementRef
 @ViewChild('santhosh',{static:false}) output!:ElementRef
 @ViewChildren('inputField') inputf!:QueryList<ElementRef>
 @ContentChild(LifecycleComponent) custom!:LifecycleComponent
 inputss:string=''
 name:string=''
 userName: string=' '
 userName1:string=' '
 userName2:string=' '
 james:boolean=true
 santhanam:string='santhanam'
 a!:string; 
storedArray: any;
storedArrays:string[]=[]
//  userNames!:string
data: string = '';
oddNumbers:number[]=[1,2,3,4,5]


saveNames(){
  const values=this.inputf.map(inputs =>inputs.nativeElement.value)
  if(values.every(inp => inp===values[0])){
    const storedData = localStorage.getItem('data');
    // if (storedData) {
      const values = storedData?JSON.parse(storedData):[]
      this.inputf.forEach((input, index) => {
        input.nativeElement.value = values[index] || '';
      });
    // }
  }
  else{
    localStorage.setItem('data', JSON.stringify(values));
  }
}

toggleStorage(): void {
  if (this.data) {
    localStorage.setItem('storedData', this.data);
    // localStorage.clear()
  }
  else {
   this.data= localStorage.getItem('storedData')||''
  }
}

saveName() {
  
  if(this.userName===this.userName1&&this.userName1===this.userName2){
    const storedArrayString = localStorage.getItem('myArray');
    if (storedArrayString) {
      this.storedArray=JSON.parse(storedArrayString)
      this.storedArrays.push(this.storedArray)
      console.log(this.storedArrays);
      
      this.userName=this.storedArray[0]
      this.userName1=this.storedArray[1]
      this.userName2=this.storedArray[2]
    }
   }
else{
  const arrayToStore = [this.userName,this.userName1,this.userName2]
  localStorage.setItem('myArray', JSON.stringify(arrayToStore))

  }
}


 santa(){
  this.inputss = this.inputs.nativeElement.value;
  console.log(this.inputss)
 }

 increase(){
  this.input.increases()
 }
 decrease(){
  this.input.decrease()
 }
 start(){
  this.watch.start()
 }
 stop(){
  this.watch.stop()
 }
 Reset(){
  this.watch.Reset()
 }
}
