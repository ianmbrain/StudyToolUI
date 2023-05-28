import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Card } from 'src/app/models/card.model';

@Injectable({
  providedIn: 'root'
})
export class CardsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  getAllCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.baseApiUrl + '/api/card');
  }

  addDeck(addCardRequest: Card) {
    return this.http.post(this.baseApiUrl + '/api/card', addCardRequest);
  }
}
