import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarStatus = '';
  inputText = '';
  text = 'UPS';

  constructor() {
  }

  addCar() {
    this.addCarStatus = 'Car add...';
  }

  onKeyUp(event) {
    this.inputText = event.target.value;
  }
}
