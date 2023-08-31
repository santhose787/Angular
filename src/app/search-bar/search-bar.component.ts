import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() ingredientsList=new EventEmitter<string>()
  
  ingredients:any
  
  save(event:any){
    console.log(event)
    this.ingredients=event.target.value
    console.log(this.ingredients)
    this.ingredientsList.emit(this.ingredients)
  }
  storeData(){
    // this.ingredientsList.emit(this.ingredients)
  }
}
