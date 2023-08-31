import { Component } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  name='';
  mark1:any;
  mark2:any;
  mark3:any;
  mark4:any;
  mark5:any;
  total=0;
  result=0;
  
  arr:any=[];
  karthi=false;

  /*name: string = "";
  tamil: string = "";
  english: string = "";
  maths: string = "";
  science: string = "";
  social: string = "";
  total: number = 0;
  result: number = 0;
  arr: any = [];
  stuTotal() {
    this.total = parseInt(this.tamil) + parseInt(this.english) + parseInt(this.maths) + parseInt(this.science) + parseInt(this.social);
    this.result = (this.total) / 5;
  }*/

  stuTotal(){
    this.total=parseInt(this.mark1)+ parseInt(this.mark2)+ parseInt(this.mark3)+ parseInt(this.mark4)+ parseInt(this.mark5);
    this.result=(this.total) / 5;
    this.arr.push({Name:this.name,Tamil:this.mark1,English:this.mark2,Maths:this.mark3,Science:this.mark4,Social:this.mark5,Total:this.total,Result:this.result})
    }
  next(){
    this.name=''
    this.mark1=''
    this.mark2=''
    this.mark3=''
    this.mark4=''
    this.mark5=''
    this.total=0;
    this.result=0;
  }
  searchTerms='';
 foundItem:any;
 search(newValue:string):void{
  this.searchTerms=newValue;
 }
get san(){
  this.karthi=true;
for (let items of this.arr) {
  if (items.Name === this.searchTerms) {
     return this.foundItem = items;
    }
     // console.log(this.foundItem)
  }
  // this.searchTerm='';
}
 
  /*get selectedItem() {
    return this.arr.find((item: { Name: any; }) => item.Name === this.searchTerm);
  }*/
  
  // testing
  number1: number = 0;
  number2: number = 0;
  result1: number = 0;

  calculateSum(): void {
    this.result1 = this.number1 + this.number2;
  }
}
