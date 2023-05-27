import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DecksService } from 'src/app/services/decks.service';
import { Deck } from 'src/app/models/deck.model';

@Component({
  selector: 'app-edit-deck',
  templateUrl: './edit-deck.component.html',
  styleUrls: ['./edit-deck.component.css']
})
export class EditDeckComponent implements OnInit {
  
  deckDetails: Deck = {
    id: null,
    title: '',
    description: ''
  };
  
  constructor(private decksService: DecksService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if(id) {
          this.decksService.getDeck(parseInt(id))
          .subscribe({
            next: (response) => {
              this.deckDetails = response;
            }
          })
        }
      }
    })
  }

  updateDeck() {
    this.decksService.updateDeck(this.deckDetails.id, this.deckDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['decks']);
      }
    });
  }
}
