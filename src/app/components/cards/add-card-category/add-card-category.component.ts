import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CardsService } from 'src/app/services/cards.service';

@Component({
  selector: 'app-add-card-category',
  templateUrl: './add-card-category.component.html',
  styleUrls: ['./add-card-category.component.css']
})
export class AddCardCategoryComponent {
  
  cardId: number = 1;
  categoryId: number = 1;
  
  constructor(private cardsService: CardsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const cardId = params.get('cardId');

        if(cardId) {
          this.cardId = parseInt(cardId);
        }
      }
    })
  }

  addCardCategory() {
    this.cardsService.addCardCategory(this.cardId, this.categoryId)
    .subscribe({
      next:(request) => { }
    });

    this.router.navigate(['cards']);
  }
}
