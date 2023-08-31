import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathsService {
  san:any=66;



  constructor() { }
  increase(){
    this.san++;
  }
}
