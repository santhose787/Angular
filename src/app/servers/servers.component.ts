import { Component, OnInit } from '@angular/core';
import { UniqService } from '../services/uniq.service';
import { MathsService } from '../maths.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
  providers: [CarService]
})
export class ServersComponent{
   /* data:string="server name";
    bool:boolean=false;
    a:string="jenith";
    
   
  }
    bala():any{
      this.a="server is created"+this.data; }*/
     /* firstname:string="santhosh";
      lastname:string="sandy";
      z:boolean=false;
      ab:any=300;
      vasa(a:number,b:number):number{
        return Math.min(a,b)
      }*/
     

     
/*z=false;
large:number=0;
changeNum()
{
this.z=true;
this.large=Math.sqrt(9);

}
getMax(a:number){
  return Math.sqrt(a);
}*/
 /*message: string = "Hello, world!";
 a:string="santhosh";
 server:boolean=false;


 title: string = 'Find the Largest Number';
  largestNumber: number = 0;
  isDisabled: boolean = false;

  findLargestNumber() {
    this.isDisabled = true;
    this.server=true;
    this.largestNumber = Math.max(200,900);
  }

 getMax(first:number,second:number){
  return Math.max(first, second)
 }*/
 name:string="";
 serverName:string="Testserver";
 isServer:boolean=true;
 server1:boolean=false;
 servers:string[]=[""];
 server3:string="";
 tab=false;
 username:string="asajsh";
 items=[
  {name:"santhose",age:22},
  {name:"prem",age:21},
  {name:"jenith",age:23}
 ]
  uniq: any;
  aa:any;

 constructor(public math:MathsService){
  // this.aa=this.mathsService.san;
  
}
inc(){
  this.math.increase();
}
changename(event:any){
  // console.log(event)
      this.name=event.target.value;
}

 but(){
  this.server1=true;
  this.tab=true;
  this.servers.push("you created a server name is: "+this.serverName);
  this.server3="you Created a server name as: "+this.serverName+"server";
  
 }
 deleteServer(){
  if(this.servers.length>0){
    this.servers.pop();
    if(this.servers.length===0){
      this.server3="No server was created" ;
    }
    
  }
 }


}
