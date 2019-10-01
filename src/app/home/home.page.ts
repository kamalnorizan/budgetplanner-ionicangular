import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  enteredReason = '';
  inputAmount = '';

  constructor() { }

  onClick() {
    alert('Button clicked');
  }

  resetForm() { 
    this.enteredReason = '';
    this.inputAmount = '';
  }

  removeItem() { }

}
