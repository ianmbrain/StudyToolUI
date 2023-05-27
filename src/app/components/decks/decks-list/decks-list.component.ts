import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/models/deck.model';

@Component({
  selector: 'app-decks-list',
  templateUrl: './decks-list.component.html',
  styleUrls: ['./decks-list.component.css']
})
export class DecksListComponent implements OnInit {

  decks: Deck[] = [
    {
      id: 1,
      title: 'deck 1',
      description: 'description 1'
    },
    {
      id: 2,
      title: 'deck 2',
      description: 'description 2'
    }
  ];

  constructor() {

  }

  ngOnInit(): void {
    this.decks.push();
  }
}
