import { Component, EventEmitter, Input, Output } from '@angular/core';

console.log("Inside Buttons Component")

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent {
  @Input() name: any = '';
  @Input() type: any = '';
  @Output() buttonClick = new EventEmitter<string>();

  clickHandler(): void {
    console.log("Inside clickHandler() of button component")
    console.log(this.name)  
    this.buttonClick.emit(this.name);
  }

}

