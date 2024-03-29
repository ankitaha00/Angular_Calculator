import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonsComponent } from '../buttons.component';

console.log("Inside Function Button Component")

@Component({
  selector: 'app-function-button',
  templateUrl: './function-button.component.html',
  styleUrls: ['./function-button.component.css']
})

export class FunctionButtonComponent extends ButtonsComponent {
  @Input() override name: any = '';

  constructor() { super(); }

  handleFunctionButtonClick(): void {
    console.log("Inside handleFunctionButtonClick()")
    console.log("Function button '" + this.name + "' CLICKED");
    this.buttonClick.emit(this.name)
  }
}
