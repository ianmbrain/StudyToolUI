import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-add-category-card',
  templateUrl: './add-category-card.component.html',
  styleUrls: ['./add-category-card.component.css']
})
export class AddCategoryCardComponent {

  addCardRequest: Card = {
    term: '',
    description: '',
    important: false
  };

  deckId: Number = 1;
  categoryId: Number = 0;

  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const categoryId = params.get('categoryId');

        if(categoryId) {
          this.categoryId = parseInt(categoryId);
        }
      }
    })
  }

  addCard() {
    this.cardsService.addCard(this.deckId, this.categoryId, this.addCardRequest)
    .subscribe({
      next:(request) => { }
    });

    this.router.navigate(['/categories/cards', this.categoryId]);
  }
}
