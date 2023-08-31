import { Component, EventEmitter, Input, Output,ContentChild } from '@angular/core';
import { LifecycleComponent } from '../lifecycle/lifecycle.component';
import { CarService } from '../car.service';
import { TechService } from '../tech.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  @ContentChild(LifecycleComponent) life!:LifecycleComponent
@Output() searchName= new EventEmitter<string>();
  @Input()
  item!: { Servers1: string; Servers2: string; };
  searchTerm:string='';
  a!:string;
  datas: string[] = [];

  constructor(private dataService: TechService) { }

  addData() {
    console.log('hiii');
    
    const newItem = "item" + (this.datas.length+1)
    this.dataService.addToData(newItem);
    this.datas = this.dataService.getData();
  }
 
  onSearch(){
    this.searchName.emit(this.searchTerm)
  }
}

