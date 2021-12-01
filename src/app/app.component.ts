import { Component } from '@angular/core';
import {findIndex} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 qwe =[{

  firstName:'Ivan',
    LastName:'Petrovich',
    age:24,}
  , {
     firstName: 'alexandr',
     LastName: 'Lukashenko',
     age: 67
   },
   {
  firstName: 'vladimir',
      LastName: 'Putin',
      age: 69
}



]
  go(){
this.qwe.shift()
  }
}
