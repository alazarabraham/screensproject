import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamingdataComponent } from './streamingdata.component';

describe('StreamingdataComponent', () => {
  let component: StreamingdataComponent;
  let fixture: ComponentFixture<StreamingdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamingdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
