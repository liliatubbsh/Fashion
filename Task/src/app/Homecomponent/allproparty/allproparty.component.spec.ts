import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpropartyComponent } from './allproparty.component';

describe('AllpropartyComponent', () => {
  let component: AllpropartyComponent;
  let fixture: ComponentFixture<AllpropartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllpropartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllpropartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
