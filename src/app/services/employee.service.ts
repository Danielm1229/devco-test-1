import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  employees = [];

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(environment.configUrl + "items");
  }

  createEmployee(employee){
    return this.http.put(environment.configUrl + "items", employee, this.httpOptions);
  }

  deleteEmployee(employeeId: string){
    return this.http.delete(environment.configUrl + "items/" + employeeId);
  }

  updateEmployee(employee, employeeId: string){
    return this.http.put(environment.configUrl + "items/" + employeeId, employee, this.httpOptions);
  }
}
