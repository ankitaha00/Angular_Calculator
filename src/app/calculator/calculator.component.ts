import { Component, Input, KeyValueDiffers } from '@angular/core';
import { CalculatorModel } from './calculator.model';

console.log('Inside Calculator Component');
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent extends CalculatorModel {

  buttonArray: { name: string, type: string }[] = [];
  displayContent: string = '';

  model = new CalculatorModel();

  funcBtns = this.model.functionButtons;           //receiving {name, type} from CalculatorModel
  numBtns = this.numericButtons;                   //receiving {name, type} from CalculatorModel
  oprBtns = this.operationButtons;                 //receiving {name, type} from CalculatorModel

  // { name: 'AC', value: 'AC', type: 'FUNCTION' }
  // Handling Function Button CLick
  handleFunctionButtonClick(key: any): void {
    if (key === 'AC') {
      console.log('AC Clicked');
      this.displayContent = '';
    }
    else if (key === '+/-') {
      console.log('+/- Clicked')
      this.setDisplay(String(-(Number(this.displayContent))));
    }
    else if (key === 'C') {
      console.log("C Clicked")
      this.displayContent = String(this.displayContent).slice(0, -1);
    }
  }
  
  // Handling Numeric Button CLick
  handleNumericButtonClick(key: any): void {
    if (key === '0' && this.displayContent !== '0') {
      console.log("0 Clicked");
      this.setDisplay(this.displayContent + key);
    } else if (key !== '0') {
      console.log(key + " Clicked");
      if (this.displayContent === '0') {
        this.setDisplay(key);
      } else {
        this.setDisplay(this.displayContent + key);
      }
    }
  }

  // Handling Operation Button CLick
  handleOperationButtonClick(key: any): void {
    if (key === '=') {
      let handleExpression = this.handleExpression(this.displayContent);
      this.setDisplay(eval(handleExpression));
    }
    else {
      this.setDisplay(this.displayContent + key);
    }
  }

  // Handling Double Operators
  handleExpression(expression: string): string {
    expression = expression.replace(/--/, '+');
    expression = expression.replace(/-+/, '-');
    return expression;
  }

  setDisplay(value: string) {
    this.displayContent = value;
  }

  getDisplay() {
    console.log("display ", this.displayContent);
    return this.displayContent;
  }
}








