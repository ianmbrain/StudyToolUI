import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-add-deck-card',
  templateUrl: './add-deck-card.component.html',
  styleUrls: ['./add-deck-card.component.css']
})
export class AddDeckCardComponent {
  
  addCardRequest: Card = {
    term: '',
    description: '',
    important: false
  };

  deckId: Number = 0;
  categoryId: Number = 1;

  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const deckId = params.get('deckId');

        if(deckId) {
          this.deckId = parseInt(deckId);
        }
      }
    })
  }

  addCard() {
    this.cardsService.addCard(this.deckId, this.categoryId, this.addCardRequest)
    .subscribe({
      next:(request) => { }
    });

    this.router.navigate(['decks']);
  }
}
