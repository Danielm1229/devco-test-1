import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  configUrl = "https://ozqim2rsz3.execute-api.us-east-2.amazonaws.com/";
  employees = [];

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(this.configUrl + "items");
  }

  createEmployee(employee){
    return this.http.put(this.configUrl + "items", employee, this.httpOptions).pipe();
  }

  deleteEmployee(employeeId: string){
    return this.http.delete(this.configUrl + "items/" + employeeId).pipe();
  }

  updateEmployee(employee, employeeId: string){
    return this.http.put(this.configUrl + "items/" + employeeId, employee, this.httpOptions).pipe();
  }
}
