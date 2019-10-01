import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  enteredReason = '';
  inputAmount = '';
  expensesList = [];

  constructor() { }

  onClick() {
    alert('Button clicked');
  }

  resetForm() {
    this.enteredReason = '';
    this.inputAmount = '';
  }

  addExpense() {
    this.expensesList.push(this.enteredReason + ' : RM' + this.inputAmount);
  }

  removeItem(index) {
    this.expensesList.splice(index, 1);
  }

}
