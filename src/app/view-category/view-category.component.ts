import { Component, Input } from '@angular/core';
import { Icategory } from '../category/Icategory';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent {
  @Input() category!:Icategory;
}
