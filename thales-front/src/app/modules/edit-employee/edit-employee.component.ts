import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeeModel } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  employee: EmployeeModel[];

  public mechForm = new FormGroup({
    name: new FormControl('',{
      validators: [
        Validators.required,
        Validators.maxLength(80),
        Validators.min(1)
      ]
    }),
    document: new FormControl('',{
      validators: [
        Validators.required,
        Validators.max(9999999999),
        Validators.min(1)
      ]
    }),
    email: new FormControl('',{
      validators: [
        Validators.required,
        Validators.email,
        Validators.maxLength(100)
      ]
    }),
    phone: new FormControl('',{
      validators: [
        Validators.required,
        Validators.maxLength(10),
        Validators.minLength(10)
      ]
    }),
    salary: new FormControl('',{
      validators: [
        Validators.required,
        Validators.maxLength(200)
      ]
    }),
  })
    idemployee = 0;
  constructor(private EmployeeService: EmployeeService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        this.idemployee = params.idemployee;
        this.mechForm.get('name').setValue(params.name);
        this.mechForm.get('document').setValue(params.document);
        this.mechForm.get('email').setValue(params.email);
        this.mechForm.get('phone').setValue(params.phone);
        this.mechForm.get('salary').setValue(params.salary);
        console.log(params);
      }
    );
  }
  
  get name(){
    return this.mechForm.get('name');
  }
  get document(){
    return this.mechForm.get('document');
  }
  get phone(){
    return this.mechForm.get('phone');
  }
  get email(){
    return this.mechForm.get('email');
  }
  get salary(){
    return this.mechForm.get('salary');
  }

  editar(){
      const data = {
        idemployee: this.idemployee,
        name: this.mechForm.value.name,
        document: this.mechForm.value.document,
        phone: this.mechForm.value.phone,
        email: this.mechForm.value.email,
        salary: this.mechForm.value.salary
      };
      this.EmployeeService.updateRequest(data).subscribe(data => {
        alert("Se actualizo el empleado correctamente");
        this.router.navigate(['employee-list']);
        console.log(data);
      });
  }
  
  }