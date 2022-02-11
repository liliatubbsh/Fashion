import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditecustomerComponent } from './editecustomer.component';

describe('EditecustomerComponent', () => {
  let component: EditecustomerComponent;
  let fixture: ComponentFixture<EditecustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditecustomerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditecustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
