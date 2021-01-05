import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiondetailsComponent } from './executiondetails.component';

describe('ExecutiondetailsComponent', () => {
  let component: ExecutiondetailsComponent;
  let fixture: ComponentFixture<ExecutiondetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecutiondetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiondetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
