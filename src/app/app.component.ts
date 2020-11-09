import { Component } from '@angular/core';
import { Employee } from './models/employee';

// https://www.youtube.com/watch?v=arGRTVdG--c&t=195s&ab_channel=FaztCode

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employeeArray: Employee[] = [
    { id: 1, name: "Ryan", country: "USA" },
    { id: 2, name: "Angelica", country: "USA" },
    { id: 3, name: "Joe", country: "USA" }
  ];




}
