import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryCardComponent } from './add-category-card.component';

describe('AddCategoryCardComponent', () => {
  let component: AddCategoryCardComponent;
  let fixture: ComponentFixture<AddCategoryCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCategoryCardComponent]
    });
    fixture = TestBed.createComponent(AddCategoryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
