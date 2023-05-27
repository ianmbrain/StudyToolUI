import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Deck } from 'src/app/models/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DecksService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllDecks(): Observable<Deck[]> {
    return this.http.get<Deck[]>(this.baseApiUrl + '/api/deck');
  }

  addDeck(addDeckRequest: Deck) {
    return this.http.post(this.baseApiUrl + '/api/deck', addDeckRequest);
  }

  getDeck(id: number): Observable<Deck> {
    return this.http.get<Deck>(this.baseApiUrl + '/api/deck/' + id);
  }

  updateDeck(id: number | null | undefined, updateDeckRequest: Deck) {
    return this.http.put(this.baseApiUrl + '/api/deck/' + id, updateDeckRequest);
  }

  deleteDeck(id: number | null | undefined) {
    return this.http.delete(this.baseApiUrl + '/api/deck/' + id);
  }
}
