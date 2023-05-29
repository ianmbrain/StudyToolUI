import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { DecksService } from 'src/app/services/decks.service';

@Component({
  selector: 'app-deck-cards',
  templateUrl: './deck-cards.component.html',
  styleUrls: ['./deck-cards.component.css']
})
export class DeckCardsComponent {

  cards: Card[] = [];

  constructor(private decksService: DecksService, private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const deckId = params.get('deckId');

        if(deckId) {
          this.decksService.getCardsOfDeck(parseInt(deckId))
          .subscribe({
            next: (cards) => {
              this.cards = cards;
            }
          })
        }
      }
    })

    // this.decksService.getCardsOfDeck()
    // .subscribe({
    //   next: (cards) => {
    //     this.cards = cards;
    //   }
    // });
  }

}
