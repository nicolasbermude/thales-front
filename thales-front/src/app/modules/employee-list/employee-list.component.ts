import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  idemployee: EmployeeModel[];
  employee: EmployeeModel[];
  dtOptions: DataTables.Settings = {};

  constructor(private EmployeeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true
    };

    this.EmployeeService.getEmployee().subscribe(
      (data: any) => this.employee = data,
      error => console.log(error)
    );
  }

  

  eliminar(idemployee) {
    this.EmployeeService.deleteEmployee(idemployee).subscribe(data => {
      console.log(data);
    });
    console.log(idemployee);
  }

  crearEmployee(){
    this.router.navigate(['employee']);
  }

  actualizarEmployee(employee){
    this.router.navigate(['edit-employee'],{ queryParams:employee} );
  }

  }

