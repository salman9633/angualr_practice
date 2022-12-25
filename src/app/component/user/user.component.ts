import { Component, EventEmitter, Input, Output } from '@angular/core';


interface UserInterface{
  name:string;
  age:number;
  id:number

}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() user!:UserInterface;

  @Output() userEvent = new EventEmitter<UserInterface>()

  sendUserEvent():void{
    this.userEvent.emit(this.user)
    
  }
}
