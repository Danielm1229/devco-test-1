import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeService } from '../../services/employee.service';
import {MatDialog} from '@angular/material/dialog';
import { EditDialogComponent } from '../edit-dialog/edit-dialog.component';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  styleUrls: ['./employees-table.component.scss']
})
export class EmployeesTableComponent implements OnInit {

  employees = [];
  displayedColumns: string[] = ['employeeId', 'name' , 'lastName' , 'position' , 'salary' , 'phoneNumber' , 'address' , 'client', 'actions'];
  dataSource = new MatTableDataSource(this.employees);
  
  constructor(public employeeService: EmployeeService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  getEmployees(){
    this.employeeService.getAllEmployees().subscribe(resp => {
      this.employees = resp['Items'];
    });
  }

  openEditDialog(element){
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { dataEmployee: element },
    });

    dialogRef.afterClosed().subscribe(result => {
      dialogRef.close(this.ngOnInit());
    });
  }

  openDeleteDialog(element){
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: { id: element.EmployeeId },
    });

    dialogRef.afterClosed().subscribe(result => {
      dialogRef.close(this.ngOnInit());
    });
  }

  openCreateDialog(){
    const dialogRef = this.dialog.open(CreateDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      dialogRef.close(this.ngOnInit());
    });
  }
}
