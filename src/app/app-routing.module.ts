import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksListComponent } from './components/decks/decks-list/decks-list.component';
import { AddDeckComponent } from './components/decks/add-deck/add-deck.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
