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
  currentCard: Card = this.cards[-1];

  descriptionBool: boolean = false;

  deckCardId: Number = 0;

  constructor(private decksService: DecksService, private route: ActivatedRoute,) {
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
              this.currentCard = cards[0];
            }
          })
        }
      }
    })
  }

  nextItem() {
    if (this.currentIndex < this.cards.length - 1) {
      this.currentIndex++;
      this.descriptionBool = false;
      this.currentCard = this.cards[this.currentIndex];
    }
  }

  prevItem() {
    if (this.currentIndex >= 1) {
      this.currentIndex--;
      this.descriptionBool = false;
      this.currentCard = this.cards[this.currentIndex];
    }
  }

  flipCard() {
    if(this.descriptionBool == false) {
      this.descriptionBool = true;
    }
    else {
      this.descriptionBool = false;
    }
  }
}
