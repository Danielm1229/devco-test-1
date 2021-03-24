import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {

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

  constructor(public employeeService: EmployeeService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  createEmployee(){
    console.log(this.employeeStructure.value);
    this.employeeService.createEmployee(this.employeeStructure.value).subscribe(resp => {
      alert(resp);
      window.location.reload();
    })
  }
}
