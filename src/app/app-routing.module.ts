import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksListComponent } from './components/decks/decks-list/decks-list.component';
import { AddDeckComponent } from './components/decks/add-deck/add-deck.component';
import { EditDeckComponent } from './components/decks/edit-deck/edit-deck.component';
import { CategoryListComponent } from './components/categories/category-list/category-list.component';
import { AddCategoryComponent } from './components/categories/add-category/add-category.component';
import { EditCategoryComponent } from './components/categories/edit-category/edit-category.component';
import { CardListComponent } from './components/cards/card-list/card-list.component';
import { AddCardComponent } from './components/cards/add-card/add-card.component';
import { EditCardComponent } from './components/cards/edit-card/edit-card.component';
import { DeckCardsComponent } from './components/decks/deck-cards/deck-cards.component';
import { AddDeckCardComponent } from './components/decks/add-deck-card/add-deck-card.component';
import { CardStudyComponent } from './components/cards/card-study/card-study.component';
import { CategoryCardsComponent } from './components/categories/category-cards/category-cards.component';
import { AddCardCategoryComponent } from './components/cards/add-card-category/add-card-category.component';
import { CardCategoriesComponent } from './components/cards/card-categories/card-categories.component';
import { AddCategoryCardComponent } from './components/categories/add-category-card/add-category-card.component';

const routes: Routes = [
  {
    path: '',
    component: DecksListComponent
  },
  {
    path: 'decks',
    component: DecksListComponent
  },
  {
    path: 'decks/add',
    component: AddDeckComponent
  },
  {
    path: 'decks/edit/:id',
    component: EditDeckComponent
  },
  {
    path: 'decks/:deckId',
    component: DeckCardsComponent
  },
  {
    path: 'cards/add/:deckId',
    component: AddDeckCardComponent
  },
  {
    path: 'categories',
    component: CategoryListComponent
  },
  {
    path: 'categories/add',
    component: AddCategoryComponent
  },
  {
    path: 'categories/edit/:id',
    component: EditCategoryComponent
  },
  {
    path: 'categories/card/:id',
    component: CategoryCardsComponent
  },
  {
    path: 'categories/cards/:categoryId',
    component: AddCategoryCardComponent
  },
  {
    path: 'cards',
    component: CardListComponent
  },
  {
    path: 'cards/add',
    component: AddCardComponent
  },
  {
    path: 'cards/edit/:id',
    component: EditCardComponent
  },
  {
    path: 'cards/study/:deckId',
    component: CardStudyComponent
  },
  {
    path: 'cards/addCategory/:cardId',
    component: AddCardCategoryComponent
  },
  {
    path: 'cards/categories/:cardId',
    component: CardCategoriesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
