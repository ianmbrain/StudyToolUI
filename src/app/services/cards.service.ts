import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Card } from 'src/app/models/card.model';
import { CardCategory } from '../models/cardCategory.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseApiUrl + '/api/card');
  }

  addCard(deckId: Number, categoryId: Number, addCardRequest: Card) {
    return this.http.post(this.baseApiUrl + '/api/card?deckId=' + deckId + '&categoryId=' + categoryId, addCardRequest);
  }

  getCard(id: number): Observable<Card> {
    return this.http.get<Card>(this.baseApiUrl + '/api/card/' + id);
  }

  updateCard(id: number | undefined, updatedCardRequest: Card) {
    return this.http.put(this.baseApiUrl + '/api/card/' + id, updatedCardRequest);
  }

  deleteCard(id: number | undefined) {
    return this.http.delete(this.baseApiUrl + '/api/card/' + id);
  }

  addCardCategory(cardId: number, categoryId: number) {
    return this.http.post(this.baseApiUrl + '/CreateCard?cardId=' + cardId + '&categoryId=' + categoryId, {});
  }
}
