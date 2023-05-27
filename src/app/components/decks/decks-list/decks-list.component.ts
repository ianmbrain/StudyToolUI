import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/models/deck.model';
import { DecksService } from 'src/app/services/decks.service';

@Component({
  selector: 'app-decks-list',
  templateUrl: './decks-list.component.html',
  styleUrls: ['./decks-list.component.css']
})
export class DecksListComponent implements OnInit {

  decks: Deck[] = [];

  constructor(private decksService: DecksService) {

  }

  ngOnInit(): void {
    this.decksService.getAllDecks()
    .subscribe({
      next: (decks) => {
        this.decks = decks;
      }
    });
  }
}
