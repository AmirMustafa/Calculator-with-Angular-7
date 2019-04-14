import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent  {
	public num1:number;
	public num2:number;
	public result:number;
	public resultheading: any;

	sum() {
		this.result = this.num1 + this.num2;
		this.resultheading = this.num1 + ' + ' + this.num2;
	}

	diff() {
		this.result = this.num1 - this.num2;
		this.resultheading = this.num1 + ' - ' + this.num2;
	}
	mult() {
		this.result = this.num1 * this.num2;
		this.resultheading = this.num1 + ' x ' + this.num2;
	}
	div() {
			this.result = this.num1 / this.num2;
			this.resultheading = this.num1 + ' / ' + this.num2;
		}

}
