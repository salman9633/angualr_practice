import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  isClicked: boolean = false
  doubleClicked() {
    this.isClicked=!this.isClicked
  }
}
