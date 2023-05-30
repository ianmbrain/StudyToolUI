import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardCategory } from 'src/app/models/cardCategory.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-add-card-category',
  templateUrl: './add-card-category.component.html',
  styleUrls: ['./add-card-category.component.css']
})
export class AddCardCategoryComponent {
  
  cardCategoryRequest: CardCategory = {
    cardId: 1,
    categoryId: 1
  };
  
  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const cardId = params.get('cardId');

        if(cardId) {
          this.cardCategoryRequest.cardId = parseInt(cardId);
        }
      }
    })
  }

  addCardCategory() {
    console.log(this.cardCategoryRequest);
    this.cardsService.addCardCategory(this.cardCategoryRequest)
    .subscribe({
      next:(request) => { }
    });

    this.router.navigate(['cards']);
  }
}
