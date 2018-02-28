import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Bently'];
  dates = [
    new Date(2015, 3, 4),
    new Date(2011, 7, 1),
    new Date(2016, 3, 2),
    new Date(2019, 1, 4),
    new Date(2010, 9, 5)
  ];
 
  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }
}
