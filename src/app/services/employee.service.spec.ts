import { TestBed } from '@angular/core/testing';

import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';

describe('EmployeeService', () => {
  let service: EmployeeService;
  let employee;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [EmployeeService],
    });
    employee = {
      "EmployeeId": "123456789011",
      "Address": "calle 5 # 1 -1",
      "Client": "Devco1",
      "PhoneNumber": "31009090900",
      "Salary": 8000000,
      "Position": "Ing Calidad",
      "LastName": "Ruiz",
      "Name": "Santiago"
    };
    service = TestBed.inject(EmployeeService);
  });

  it('Debería utilizar el servicio getAllEmployees', () => {
    expect(service.getAllEmployees()).not.toBe(null);
  });

});
