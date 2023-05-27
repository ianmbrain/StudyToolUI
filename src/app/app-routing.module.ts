import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DecksListComponent } from './components/decks/decks-list/decks-list.component';
import { AddDeckComponent } from './components/decks/add-deck/add-deck.component';
import { EditDeckComponent } from './components/decks/edit-deck/edit-deck.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
