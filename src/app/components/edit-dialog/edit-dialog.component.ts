import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

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
  
  constructor(public employeeService: EmployeeService, @Inject(MAT_DIALOG_DATA) public data: {}, private dialogRef: MatDialogRef<EditDialogComponent>) { 
    let dataEmployee = this.data['dataEmployee'];
    this.employeeStructure.setValue(dataEmployee);
    console.log(this.employeeStructure.value);
  }

  ngOnInit(): void {
  }

  updateEmployee(){
    console.log(this.employeeStructure.value);
    this.employeeService.updateEmployee(this.employeeStructure.value, this.employeeStructure.value.EmployeeId).subscribe(resp => {
      alert(resp);
      this.dialogRef.close();
    })
  }

  get form(){
    return this.employeeStructure.controls;
  }
}
