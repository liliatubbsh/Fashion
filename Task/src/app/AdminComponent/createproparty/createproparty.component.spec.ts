import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepropartyComponent } from './createproparty.component';

describe('CreatepropartyComponent', () => {
  let component: CreatepropartyComponent;
  let fixture: ComponentFixture<CreatepropartyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatepropartyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepropartyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
