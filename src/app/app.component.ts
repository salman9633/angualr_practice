import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularPractice';

  userObj={
    name:'salman',
    age:21,
    id:1
  }
 userArr:any[]=[]
  userOutput(event:any){
    this.userArr.push(event)
  }
}
