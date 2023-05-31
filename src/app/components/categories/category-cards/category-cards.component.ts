import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from 'src/app/models/card.model';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-category-cards',
  templateUrl: './category-cards.component.html',
  styleUrls: ['./category-cards.component.css']
})
export class CategoryCardsComponent implements OnInit{

  cards: Card[] = [];

  categoryId: number = 0;

  constructor(private categoriesService: CategoriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next:(params) => {
        const id = params.get('id');

        if(id) {
          this.categoryId = parseInt(id);          
          this.categoriesService.getCategoryCards(parseInt(id))
          .subscribe({
            next: (cards) => {
              this.cards = cards;
            }
          })
        }
      }
    })
  }
}
