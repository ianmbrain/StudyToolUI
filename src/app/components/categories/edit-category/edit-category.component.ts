import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent {

  categoryDetails: Category = {
    name: '',
    color: 0
  };
  
  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if(id) {
          this.categoriesService.getCategory(parseInt(id))
          .subscribe({
            next: (response) => {
              this.categoryDetails = response;
            }
          })
        }
      }
    })
  }

  updateCategory() {
    this.categoriesService.updateCategory(this.categoryDetails.id, this.categoryDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['categories']);
      }
    });
  }

  deleteCategory(id: number | undefined) {
    this.categoriesService.deleteCategory(id)
    .subscribe({
      next: (respones) => {
        this.router.navigate(['categories']);
      }
    })
  }
}
