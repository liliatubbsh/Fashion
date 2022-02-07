import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeemployeeComponent } from './editeemployee.component';

describe('EditeemployeeComponent', () => {
  let component: EditeemployeeComponent;
  let fixture: ComponentFixture<EditeemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
