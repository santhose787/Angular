import { Component, EventEmitter, Output } from '@angular/core';
import { Icategory } from '../category/Icategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  description=''
  a:number=5;
  title=''
  @Output() addCategory=new EventEmitter<Icategory>()
  onAdd(){
    let category:Icategory={
      title: this.title,
      description: this.description,
     
    }
    this.addCategory.emit(category)
  }
}
