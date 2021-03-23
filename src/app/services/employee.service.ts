import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  configUrl = "https://ozqim2rsz3.execute-api.us-east-2.amazonaws.com/items";
  employees = [];

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    return this.http.get(this.configUrl);
  }
}
