import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditepropartyComponent } from './editeproparty.component';

describe('EditepropartyComponent', () => {
  let component: EditepropartyComponent;
  let fixture: ComponentFixture<EditepropartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditepropartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditepropartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
