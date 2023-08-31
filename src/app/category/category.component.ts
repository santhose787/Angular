import { Component, ElementRef, ViewChild } from '@angular/core';
import { Icategory } from './Icategory';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @ViewChild ('inputRef') inputRef!:ElementRef
  a!:any;
  karthi:any="initialvalue"
    category:Icategory[]=[{id:1,title:"ECE",description:"Engineering course"}]
  onAdd(event:Icategory){
        event.id=this.category.length+1
        this.category.push(event)
    }
    addCategory!:Icategory;
    showCategory(add:Icategory){
          this.addCategory=add
    }
    logInputValue(){}
    sandy(event:any){
      console.log(event)
      this.a=event
    }
    karthi1(){
      this.a=this.inputRef.nativeElement.value
      console.log(this.a)
    }
}
