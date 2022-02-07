import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditedeliveryComponent } from './editedelivery.component';

describe('EditedeliveryComponent', () => {
  let component: EditedeliveryComponent;
  let fixture: ComponentFixture<EditedeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditedeliveryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditedeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
