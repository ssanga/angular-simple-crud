import { Component, OnInit } from '@angular/core';
import { Employee } from './models/employee';
import { HttpClient } from '@angular/common/http';

// https://www.youtube.com/watch?v=arGRTVdG--c&t=195s&ab_channel=FaztCode
// https://www.ag-grid.com/angular-grid/
// https://medium.com/ag-grid/get-started-with-angular-grid-in-5-minutes-83bbb14fac93

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  columnDefs = [
    { field: 'make', sortable: true, filter: true },
    { field: 'model', sortable: true, filter: true },
    { field: 'price', sortable: true, filter: true }
  ];
  rowData: any;
  // rowData = [ 
  //   { id: 1, name: 'Ryan', country: 'USA' },
  //   { id: 2, name: 'Angelica', country: 'USA' },
  //   { id: 3, name: 'Joe', country: 'USA' }
  // ]

  employeeArray: Employee[] = [
    { id: 1, name: 'Ryan', country: 'USA' },
    { id: 2, name: 'Angelica', country: 'USA' },
    { id: 3, name: 'Joe', country: 'USA' }
  ];

  selectedEmployee: Employee = new Employee();

  ngOnInit() {
    console.log('dentro de ngOnInit()')
    this.rowData = this.http.get('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/sample-data/smallRowData.json');

  }

  addOrEdit(): void {

    if (this.selectedEmployee.id === 0) {
      this.selectedEmployee.id = this.employeeArray.length + 1;
      this.employeeArray.push(this.selectedEmployee);
    }

    this.selectedEmployee = new Employee();
  }

  openForEdit(employee: Employee): void {
    this.selectedEmployee = employee;
  }

  delete(): void {
    if (confirm('Are you sure you want to delete it')) {
      this.employeeArray = this.employeeArray.filter(x => x !== this.selectedEmployee);
      this.selectedEmployee = new Employee();
    }



  }

}
