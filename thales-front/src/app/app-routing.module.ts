import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'employee',
    loadChildren: () =>
      import('src/app/modules/employee/employee.module').then(m => m.EmployeeModule)
  },
  {
    path: 'employee-list',
    loadChildren: () =>
      import('src/app/modules/employee-list/employee-list.module').then(m => m.EmplpyeeListModule)
  },
  {
    path: 'edit-employee',
    loadChildren: () =>
      import('src/app/modules/edit-employee/edit-employee.module').then(m => m.EditemployeeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
