import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RdbmsComponent } from './rdbms.component';

describe('RdbmsComponent', () => {
  let component: RdbmsComponent;
  let fixture: ComponentFixture<RdbmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RdbmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RdbmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
