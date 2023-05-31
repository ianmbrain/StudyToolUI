import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/models/category.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-categories',
  templateUrl: './card-categories.component.html',
  styleUrls: ['./card-categories.component.css']
})
export class CardCategoriesComponent {
  
  categories: Category[] = [];

  constructor(private cardsService: CardsService, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('cardId');

        if(id) {
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
}
