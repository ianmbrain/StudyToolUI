import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DecksListComponent } from './components/decks/decks-list/decks-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDeckComponent } from './components/decks/add-deck/add-deck.component';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    DecksListComponent,
    AddDeckComponent,
    EditDeckComponent,
    CategoryListComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    CardListComponent,
    AddCardComponent,
    EditCardComponent,
    DeckCardsComponent,
    AddDeckCardComponent,
    CardStudyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
