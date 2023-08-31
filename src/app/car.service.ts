import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
   
  /*san:any=66;
  

   items = [
    { id: 1, name: ' BMW', price: 150000},
    { id: 2, name: 'Audi ', price: 200000 },
    { id: 3, name: ' Maruti Suzuki', price: 80000 },
    { id: 4, name: 'Rolls Royce ', price: 250000 },
    { id: 4, name: 'Toyatto  ', price: 75000 },
  ];

  getItems(): any[] {
    return this.items;
  }*/
  input1: any;
get2:any=[22,22];
get3:any=[{name:"vasanth",cmpname:"Google",salary:"2500000"}];
a=false;
b=false;
public users: any[] = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Alice' },
];
constructor(){
}
getUsers(): any[] {
  return this.users;
}
getUserById(id: number): any {
  return this.users.find(item => item.id === id);
}


updateUser(id: number, updatedData: any): any {
  const userIndex = this.users.findIndex(user => user.id === id);
  console.log(userIndex)
  if (userIndex !== -1) {
    this.users[userIndex] = { ...this.users[userIndex], ...updatedData };
  }
}


store():any{
 this.get2.push(this.input1)
  this.input1=''
  if(this.get2.length>5){ this.a=true}
}
store1(){
  this.get2=[]
}
store2(){
  this.b=true
}

 
}

  

