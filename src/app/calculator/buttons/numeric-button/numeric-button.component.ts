import { Component, Input } from '@angular/core';
import { ButtonsComponent } from '../buttons.component';

console.log("Inside Numeric Button Component ")

@Component({
  selector: 'app-numeric-button',
  templateUrl: './numeric-button.component.html',
  styleUrls: ['./numeric-button.component.css']
})
export class NumericButtonComponent extends ButtonsComponent{
  @Input() override name: any = '';

  constructor() { super(); }

  handleNumericButtonClick(): void {
    console.log("Inside handleNumericButtonClick()")
    console.log("Numeric button '" + this.name + "' CLICKED");
    this.buttonClick.emit(this.name)
  }
}
