import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardCategoryComponent } from './add-card-category.component';

describe('AddCardCategoryComponent', () => {
  let component: AddCardCategoryComponent;
  let fixture: ComponentFixture<AddCardCategoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddCardCategoryComponent]
    });
    fixture = TestBed.createComponent(AddCardCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
