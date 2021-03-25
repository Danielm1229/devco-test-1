import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DeleteDialogComponent } from './delete-dialog.component';

describe('DeleteDialogComponent', () => {
  let component: DeleteDialogComponent;
  let fixture: ComponentFixture<DeleteDialogComponent>;
  
  const data = {
    id: "123456789011"
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDialogComponent ],
      imports: [
        MatButtonModule,
        MatDialogModule,
        HttpClientModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA,
          useValue: data
        },
        {
          provide: MatDialogRef, useValue: {close: () => {}}
        }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
