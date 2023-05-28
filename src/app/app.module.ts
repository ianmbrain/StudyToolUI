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

@NgModule({
  declarations: [
    AppComponent,
    DecksListComponent,
    AddDeckComponent,
    EditDeckComponent,
    CategoryListComponent
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
