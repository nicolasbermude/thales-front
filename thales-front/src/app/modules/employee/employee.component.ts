import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

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

  constructor(
    private EmployeeService: EmployeeService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mechForm.markAsPristine();
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


  

  
  onSubmit(){
    const data = {
      idemployee: this.mechForm.value.idemployee,
      name: this.mechForm.value.name,
      document: this.mechForm.value.document,
      phone: this.mechForm.value.phone,
      email: this.mechForm.value.email,
      salary: this.mechForm.value.salary
    }
    

    this.EmployeeService.sendRequest(data).subscribe(
      (data: any) => {
        console.log(data);
        alert("Se creo el empleado correctamente");
        this.router.navigate(['employee-list']);
      },
      error => {
        console.log(error)
        alert("Se presento el siguiente error >> " + error);
      }
    )
  }

}
