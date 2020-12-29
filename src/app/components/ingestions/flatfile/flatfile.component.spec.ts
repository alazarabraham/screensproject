import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatfileComponent } from './flatfile.component';

describe('FlatfileComponent', () => {
  let component: FlatfileComponent;
  let fixture: ComponentFixture<FlatfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlatfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
