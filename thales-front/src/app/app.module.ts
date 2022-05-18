import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeModule } from './modules/employee/employee.module';
import { EmployeeListModule } from './modules/employee-list/employee-list.module';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { EditEmployeeModule } from './modules/edit-employee/edit-employee.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EmployeeModule,
    EmployeeListModule,
    HttpClientModule,
    DataTablesModule,
    EditEmployeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
