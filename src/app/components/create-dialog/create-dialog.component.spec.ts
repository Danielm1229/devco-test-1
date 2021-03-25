
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

import { CreateDialogComponent } from './create-dialog.component';

describe('CreateDialogComponent', () => {
  let component: CreateDialogComponent | any;
  let employeeService : EmployeeService;
  let fixture: ComponentFixture<CreateDialogComponent>;
  let dialogRef;

  let requiredAndPattern;
  let required;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ {
        provide: MatDialogRef, useValue: {close: () => {}}
      } ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    requiredAndPattern = [Validators.required, Validators.pattern("^[0-9]*$")];
    required = [Validators.required];
    employeeService = TestBed.inject(EmployeeService);
    dialogRef = TestBed.inject(MatDialogRef);
    fixture = TestBed.createComponent(CreateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('FormValidations', () => {
    it('should have errors in EmployeeId', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('EmployeeId').errors).toEqual({required: true});
    })
    it('should have errors in Name', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('Name').errors).toEqual({required: true});
    })
    it('should have errors in LastName', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('LastName').errors).toEqual({required: true});
    })
    it('should have errors in Position', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('Position').errors).toEqual({required: true});
    })
    it('should have errors in Salary', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('Salary').errors).toEqual({required: true});
    })
    it('should have errors in PhoneNumber', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('PhoneNumber').errors).toEqual({required: true});
    })
    it('should have errors in Client', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('Client').errors).toEqual({required: true});
    })
    it('should have errors in Address', () => {
      component.employeeStructure.updateValueAndValidity();
      expect(component.employeeStructure.get('Address').errors).toEqual({required: true});
    })
  });

  describe('createEmployee', () => {
    it('should call the create employee api-gateway', () => {
      spyOn(employeeService, 'createEmployee').and.returnValue(of("Se ha creado el empleado."));
      component.employeeStructure.setValue({
        "EmployeeId": "1234567890112",
        "Address": "calle 5 # 1 -1",
        "Client": "Devco1",
        "PhoneNumber": "31009090900",
        "Salary": 8000000,
        "Position": "Ing Calidad",
        "LastName": "Ruiz",
        "Name": "Santiago"
    });
      spyOn(dialogRef, 'close').and.callThrough();
      component.createEmployee();
      expect(employeeService.createEmployee).toHaveBeenCalledWith({
        "EmployeeId": "1234567890112",
        "Address": "calle 5 # 1 -1",
        "Client": "Devco1",
        "PhoneNumber": "31009090900",
        "Salary": 8000000,
        "Position": "Ing Calidad",
        "LastName": "Ruiz",
        "Name": "Santiago"
      });
      expect(dialogRef.close).toHaveBeenCalled();
    });
  });

});
