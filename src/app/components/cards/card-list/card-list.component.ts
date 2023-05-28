import { Component } from '@angular/core';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent {

  cards: Card[] = [];

  constructor(private cardsService: CardsService) {

  }

  ngOnInit(): void {
    this.cardsService.getAllCards()
    .subscribe({
      next: (cards) => {
        this.cards = cards;
      }
    });
  }
}
