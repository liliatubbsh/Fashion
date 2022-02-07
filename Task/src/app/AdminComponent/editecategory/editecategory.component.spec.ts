import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditecategoryComponent } from './editecategory.component';

describe('EditecategoryComponent', () => {
  let component: EditecategoryComponent;
  let fixture: ComponentFixture<EditecategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditecategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditecategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
