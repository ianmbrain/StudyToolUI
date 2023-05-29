import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { DecksService } from 'src/app/services/decks.service';

@Component({
  selector: 'app-card-study',
  templateUrl: './card-study.component.html',
  styleUrls: ['./card-study.component.css']
})
export class CardStudyComponent {
  
  cards: Card[] = [];
  currentIndex: number = 0;
  currentCard: Card;

  deckCardId: Number = 0;

  constructor(private decksService: DecksService, private route: ActivatedRoute,) {
    this.currentCard = this.cards[this.currentIndex];
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const deckId = params.get('deckId');

        if(deckId) {
          this.deckCardId = parseInt(deckId);
          
          this.decksService.getCardsOfDeck(parseInt(deckId))
          .subscribe({
            next: (cards) => {
              this.cards = cards;
            }
          })
        }
      }
    })
  }

  nextItem() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.currentCard = this.cards[this.currentIndex];
    }
  }
}
