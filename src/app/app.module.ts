import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ServersComponent } from './servers/servers.component';
import { ServerComponent } from './server/server.component';
import {MathsService} from './maths.service';
import { CarComponent } from './car/car.component'
import { CarService } from './car.service';
import { AddComponent } from './add/add.component';
import { SearchComponent } from './search/search.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { HeaderComponent } from './header/header.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DataComponent } from './data/data.component';
import { CategoryComponent } from './category/category.component';
import { SingleCategoryComponent } from './single-category/single-category.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { LifecycleComponent } from './lifecycle/lifecycle.component';
import { CustomDirective } from './Directives/custom.directive';
import { TechService } from './tech.service';

@NgModule({
  declarations: [
    AppComponent,
    ServersComponent,
    ServerComponent,
    CarComponent,
    AddComponent,
    SearchComponent,
    ParentComponent,
    ChildComponent,
    HeaderComponent,
    SearchBarComponent,
    DataComponent,
    CategoryComponent,
    SingleCategoryComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    ViewchildComponent,
    StopwatchComponent,
    LifecycleComponent,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CarService,MathsService,TechService],
  bootstrap: [AppComponent]
})
export class AppModule { }
