import { Component, OnInit } from '@angular/core';
import { Deck } from 'src/app/models/deck.model';
import { DecksService } from 'src/app/services/decks.service';

@Component({
  selector: 'app-add-deck',
  templateUrl: './add-deck.component.html',
  styleUrls: ['./add-deck.component.css']
})
export class AddDeckComponent implements OnInit {
  
  addDeckRequest: Deck = {
    title: '',
    description: ''
  };

  constructor(private decksService: DecksService) { }

  ngOnInit(): void {
    
  }

  addDeck() {
    this.decksService.addDeck(this.addDeckRequest)
    .subscribe({
      next:(request) => { }
    });
  }
}
