import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

  private readonly requiredAndPattern = [Validators.required, Validators.pattern("^[0-9]*$")];
  private readonly required = [Validators.required];

  employeeStructure = new FormGroup ({
    EmployeeId: new FormControl('', this.requiredAndPattern),
    Address: new FormControl('', this.required),
    Client: new FormControl('', this.required),
    PhoneNumber: new FormControl('', this.requiredAndPattern),
    Salary: new FormControl('', this.requiredAndPattern),
    Position: new FormControl('', this.required),
    LastName: new FormControl('', this.required),
    Name: new FormControl('', this.required),
  });

  constructor(public employeeService: EmployeeService, private dialogRef: MatDialogRef<CreateDialogComponent>) { }

  ngOnInit(): void {
  }

  createEmployee(){
    console.log(this.employeeStructure.value);
    this.employeeService.createEmployee(this.employeeStructure.value).subscribe(resp => {
      alert(resp);
      this.dialogRef.close();
    })
  }

  get form(){
    return this.employeeStructure.controls;
  }
}
