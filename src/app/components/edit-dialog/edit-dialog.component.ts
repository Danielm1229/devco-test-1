import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-dialog',
  templateUrl: './edit-dialog.component.html',
  styleUrls: ['./edit-dialog.component.scss']
})
export class EditDialogComponent implements OnInit {

  employeeStructure = new FormGroup ({
    EmployeeId: new FormControl('', Validators.required),
    Address: new FormControl('', Validators.required),
    Client: new FormControl('', Validators.required),
    PhoneNumber: new FormControl('', Validators.required),
    Salary: new FormControl('', Validators.required),
    Position: new FormControl('', Validators.required),
    LastName: new FormControl('', Validators.required),
    Name: new FormControl('', Validators.required),
  });
  
  constructor(public employeeService: EmployeeService, @Inject(MAT_DIALOG_DATA) public data: {}) { 
    let dataEmployee = this.data['dataEmployee'];
    this.employeeStructure.setValue(dataEmployee);
    console.log(this.employeeStructure.value.EmployeeId);
  }

  ngOnInit(): void {
  }

  updateEmployee(){
    console.log(this.employeeStructure.value);
    this.employeeService.updateEmployee(this.employeeStructure.value, this.employeeStructure.value.EmployeeId).subscribe(resp => {
      alert(resp);
      window.location.reload();
    })
  }
}
