import { Component } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent {
  grocery=[
    {name:"icecream",price:'15'},
    {name:"diarymilk",price:'30'},
    {name:"kitkat",price:'25'},
    {name:"cocacola",price:'45'},
    {name:"maaza",price:'55'}
  ]
  
  searchData=''
  able=false
  arr:any=[]
  recieveData=''
  recieveData1=0
  total=0

   addData(){
    for(let item of this.grocery){
      if(item.name===this.searchData){
        this.recieveData1=parseInt(this.recieveData)*parseInt(item.price)
        this.arr.push({ name:item.name,price:item.price,quantity:this.recieveData,total:this.recieveData1})
      }
    }
  }
   sumValues(): number {
    return this.arr.reduce((total:any, item:{total: any,value: any}) => total + item.total, 0);
  }
  
searchedData(value:string){
    this.searchData=value
}

  }


