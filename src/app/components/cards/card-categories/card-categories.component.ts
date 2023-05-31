import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.css']
})
export class CardCategoriesComponent {
  
  categories: Category[] = [];

  cardId: number = 1;

  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('cardId');

        if(id) {
          this.cardId = parseInt(id);
          this.cardsService.getCategoriesByCard(parseInt(id))
          .subscribe({
            next: (response) => {
              this.categories = response;
              console.log(this.categories);
            }
          })
        }
      }
    })
  }

  deleteCardCategory(categoryId: number | undefined) {
    this.cardsService.deleteCardCategory(this.cardId, categoryId)
    .subscribe({
      next: (respones) => {
        this.router.navigate(['cards']);
      }
    })
  }
}
