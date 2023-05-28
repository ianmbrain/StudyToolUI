import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {

  addCategoryRequest: Category = {
    name: '',
    color: 0
  };

  constructor(private categoriesService: CategoriesService, private router: Router) { }

  ngOnInit(): void {
    
  }

  addCategory() {
    this.categoriesService.addCategory(this.addCategoryRequest)
    .subscribe({
      next:(request) => { }
    });

    this.router.navigate(['categories']);
  }
}
