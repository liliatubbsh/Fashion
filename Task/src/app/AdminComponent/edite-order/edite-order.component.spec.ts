import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeOrderComponent } from './edite-order.component';

describe('EditeOrderComponent', () => {
  let component: EditeOrderComponent;
  let fixture: ComponentFixture<EditeOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditeOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
