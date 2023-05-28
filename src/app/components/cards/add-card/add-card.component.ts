import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})
export class AddCardComponent implements OnInit {
  
  addCardRequest: Card = {
    term: '',
    description: '',
    important: false
  };

  constructor(private cardsService: CardsService, private router: Router) { }

  ngOnInit(): void {
    
  }

  addCard() {
    this.cardsService.addDeck(this.addCardRequest)
    .subscribe({
      next:(request) => { }
    });

    this.router.navigate(['cards']);
  }
}
