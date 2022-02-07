import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedeliveryComponent } from './createdelivery.component';

describe('CreatedeliveryComponent', () => {
  let component: CreatedeliveryComponent;
  let fixture: ComponentFixture<CreatedeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatedeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
