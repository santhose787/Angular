import { Component } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html', 
   
})
export class CarComponent {
  items:any[]=[];
  a=false;
  b=false;
//  input:string;
//  get3:string[]=[];
  constructor(public carService: CarService) {
    // this.a=carService.fruits;
    // this.items=carService.getItems();
    // this.input=carService.input1;
    // this.get3=carService.get2
  }
  emi(){
      this.a=true;
  }

  noEmi(){
    this.b=true
  }
  
  
  
  startCar() {
    console.log('Car starting...');
    // this.carService.Startengine();
  }
}
