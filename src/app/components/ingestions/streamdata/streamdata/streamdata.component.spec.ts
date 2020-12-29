import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamdataComponent } from './streamdata.component';

describe('StreamdataComponent', () => {
  let component: StreamdataComponent;
  let fixture: ComponentFixture<StreamdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
