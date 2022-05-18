import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmployeeModel } from '../../models/employee.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public sendRequest(data: EmployeeModel): Observable<EmployeeModel> {
    return this.http.post<EmployeeModel>(environment.insertEmployeeUrl, data);
  }

  public getEmployee(): Observable<EmployeeModel[]> {
    return this.http.get<EmployeeModel[]>(environment.getEmployeeUrl).pipe(
       )
  }
  public updateRequest(data: EmployeeModel): Observable<EmployeeModel> {
    console.log(data);
    return this.http.put<EmployeeModel>(environment.updateEmployeeUrl, data);
  }

  public deleteEmployee(idemployee){
    const URL = environment.deleteEmployeeUrl+ idemployee;
    console.log(URL);
    return this.http.delete(URL);
  }
  }



