import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {

  constructor(public employeeService: EmployeeService, @Inject(MAT_DIALOG_DATA) public data: {id: string}, private dialogRef: MatDialogRef<DeleteDialogComponent>) { }

  ngOnInit(): void {
  }

  deleteEmployee(){
    this.employeeService.deleteEmployee(this.data.id).subscribe(resp =>{
      alert(resp);
      this.dialogRef.close();
    })
  }
}
