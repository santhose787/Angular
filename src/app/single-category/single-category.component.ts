import { Component, EventEmitter, Input, Output } from '@angular/core';
import { user } from '../category/user.interface';
import { Icategory } from '../category/Icategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css']
})
export class SingleCategoryComponent {

  @Input()
  category!:Icategory;
  @Output() categoryAdded=new EventEmitter<Icategory>()
  
  onAdd(){
      this.categoryAdded.emit(this.category)
      
      console.log(this.categoryAdded)
  }
}
