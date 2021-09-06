import {Injectable} from '@angular/core';
import {Deck} from './deck.model';
import {Observable} from 'rxjs';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {environment} from '../../environments/environment';
import * as moment from 'moment';

type EntityResponseType = HttpResponse<Deck>;
type EntityArrayResponseType = HttpResponse<Deck[]>;


@Injectable({
  providedIn: 'root'
})
export class DeckService {
  public resourceUrl = environment.SERVER_API_URL + '/api/decks';

  constructor(protected http: HttpClient) {
  }


  create(deck): Observable<EntityResponseType> {
    return this.http
      .post<Deck>(this.resourceUrl, deck, {observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return this.http
      .get<Deck>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  query(options?: any): Observable<EntityArrayResponseType> {
    return this.http
      .get<Deck[]>(this.resourceUrl, {params: options, observe: 'response'});
  }

  protected convertDateFromServer(res: EntityResponseType): EntityResponseType {
    if (res.body) {
      res.body.createdDate = res.body.createdDate ? moment(res.body.createdDate) : undefined;
    }
    return res;
  }


  protected convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
    if (res.body) {
      res.body.forEach((deck: Deck) => {
        deck.createdDate = deck.createdDate ? moment(deck.createdDate) : undefined;

      });
    }
    return res;
  }

}
