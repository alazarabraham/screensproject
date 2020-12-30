import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsAndCardsComponent } from './tabs-and-cards.component';

describe('TabsAndCardsComponent', () => {
  let component: TabsAndCardsComponent;
  let fixture: ComponentFixture<TabsAndCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabsAndCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsAndCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
