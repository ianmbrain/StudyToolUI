import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-edit-card',
  templateUrl: './edit-card.component.html',
  styleUrls: ['./edit-card.component.css']
})
export class EditCardComponent {

  cardDetails: Card = {
    term: '',
    description: '',
    important: false
  };
  
  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if(id) {
          this.cardsService.getCard(parseInt(id))
          .subscribe({
            next: (response) => {
              this.cardDetails = response;
            }
          })
        }
      }
    })
  }

  updateCard() {
    this.cardsService.updateCard(this.cardDetails.id, this.cardDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['cards']);
      }
    });
  }

  deleteCard(id: number  | undefined) {
    this.cardsService.deleteCard(id)
    .subscribe({
      next: (respones) => {
        this.router.navigate(['cards']);
      }
    })
  }
}
