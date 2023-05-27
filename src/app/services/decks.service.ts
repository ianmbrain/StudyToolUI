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
}
