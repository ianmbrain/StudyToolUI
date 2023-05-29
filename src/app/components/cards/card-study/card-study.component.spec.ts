import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardStudyComponent } from './card-study.component';

describe('CardStudyComponent', () => {
  let component: CardStudyComponent;
  let fixture: ComponentFixture<CardStudyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardStudyComponent]
    });
    fixture = TestBed.createComponent(CardStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
