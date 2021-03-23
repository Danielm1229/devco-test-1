import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { EmployeesTableComponent } from './components/employees-table/employees-table.component';
import { EmployeeDetailComponent } from './components/employee-detail/employee-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { EditDialogComponent } from './components/edit-dialog/edit-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteDialogComponent } from './components/delete-dialog/delete-dialog.component';
import { CreateDialogComponent } from './components/create-dialog/create-dialog.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    EmployeesTableComponent,
    EmployeeDetailComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    CreateDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
