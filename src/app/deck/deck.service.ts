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
  public resourceUrl = environment.SERVER_API_URL + 'api/deck';

  constructor(protected http: HttpClient) {
  }


  create(deck: Deck): Observable<EntityResponseType> {
    return this.http
      .post<Deck>(this.resourceUrl, deck, {observe: 'response'});
  }

  find(id: number): Observable<EntityResponseType> {
    return new Observable<EntityResponseType>((observer) => {
      observer.next(new HttpResponse<Deck>({
          body: {
            id: 'noor',
            description: 'test',
            companyName: 'weFunder',
            images: [
              'https://ucarecdn.com/be55f75e-a6ca-460e-9817-e3f427bc483f/-/format/auto/-/quality/smart_retina/-/preview/',
              'https://ucarecdn.com/c25461b6-3eff-43ad-a053-c1e504638094/-/format/auto/-/quality/smart_retina/-/preview/',
              'https://ucarecdn.com/cb887be6-cff4-4a98-acde-cdf625287240/-/format/auto/-/quality/smart_retina/-/preview/'
            ],
            numberOFImages: 3,
            originalFilePath: 'https://d2qbf73089ujv4.cloudfront.net/uploads/company_attachment/file/54321-tI4JtsKpWnoZZZhh5w13iQPr/' +
              'wefunder_deck_2021.pdf',
            createdDate: moment()

          }
        })
      );
    });
    // return this.http
    //   .get<Deck>(`${this.resourceUrl}/${id}`, {observe: 'response'});
  }

  query(options?: any): Observable<EntityArrayResponseType> {
    return new Observable<EntityArrayResponseType>((observer) => {
      observer.next(new HttpResponse<Deck[]>({
          body: [
            {
              id: 'noor',
              description: 'test',
              companyName: 'weFunder',
              images: [
                'https://ucarecdn.com/be55f75e-a6ca-460e-9817-e3f427bc483f/-/format/auto/-/quality/smart_retina/-/preview/',
                'https://ucarecdn.com/c25461b6-3eff-43ad-a053-c1e504638094/-/format/auto/-/quality/smart_retina/-/preview/',
                'https://ucarecdn.com/cb887be6-cff4-4a98-acde-cdf625287240/-/format/auto/-/quality/smart_retina/-/preview/'
              ],
              numberOFImages: 3,
              originalFilePath: 'https://d2qbf73089ujv4.cloudfront.net/uploads/company_attachment/file/54321-tI4JtsKpWnoZZZhh5w13iQPr/' +
                'wefunder_deck_2021.pdf',
              createdDate: moment(),
              originalFileName: 'test'

            },
            {
              id: 'noor',
              description: 'test2',
              companyName: 'weFunder',
              images: [
                'https://ucarecdn.com/be55f75e-a6ca-460e-9817-e3f427bc483f/-/format/auto/-/quality/smart_retina/-/preview/',
                'https://ucarecdn.com/c25461b6-3eff-43ad-a053-c1e504638094/-/format/auto/-/quality/smart_retina/-/preview/',
                'https://ucarecdn.com/cb887be6-cff4-4a98-acde-cdf625287240/-/format/auto/-/quality/smart_retina/-/preview/'
              ],
              numberOFImages: 3,
              originalFilePath: 'https://d2qbf73089ujv4.cloudfront.net/uploads/company_attachment/file/54321-tI4JtsKpWnoZZZhh5w13iQPr/' +
                'wefunder_deck_2021.pdf',
              createdDate: moment(),
              originalFileName: 'test'
            },
            {
              id: 'noor',
              description: 'test3',
              companyName: 'weFunder',
              images: [
                'https://ucarecdn.com/be55f75e-a6ca-460e-9817-e3f427bc483f/-/format/auto/-/quality/smart_retina/-/preview/',
                'https://ucarecdn.com/c25461b6-3eff-43ad-a053-c1e504638094/-/format/auto/-/quality/smart_retina/-/preview/',
                'https://ucarecdn.com/cb887be6-cff4-4a98-acde-cdf625287240/-/format/auto/-/quality/smart_retina/-/preview/'
              ],
              numberOFImages: 3,
              originalFilePath: 'https://d2qbf73089ujv4.cloudfront.net/uploads/company_attachment/file/54321-tI4JtsKpWnoZZZhh5w13iQPr/' +
                'wefunder_deck_2021.pdf',
              createdDate: moment(),
              originalFileName: 'test'

            }
          ]
        })
      );
    });
    // return this.http
    //   .get<Deck[]>(this.resourceUrl, {params: options, observe: 'response'});
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
