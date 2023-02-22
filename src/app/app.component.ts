import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  wish1="";

  display()
  {
    alert("Click event is handled");
    this.wish1="Hello Everyone";
  }

  dblClick(){
    alert("Double click event is handled");
  }

  blurEvent(){
    alert("Blue event is executed");
  }
}
