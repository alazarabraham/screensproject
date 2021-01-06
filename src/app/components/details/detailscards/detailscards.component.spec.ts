import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailscardsComponent } from './detailscards.component';

describe('DetailscardsComponent', () => {
  let component: DetailscardsComponent;
  let fixture: ComponentFixture<DetailscardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailscardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailscardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
