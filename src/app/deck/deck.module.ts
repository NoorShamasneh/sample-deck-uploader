import {Injectable, NgModule} from '@angular/core';
import {DeckItemComponent} from './deck-item/deck-item.component';
import {DecksListComponent} from './decks-list/decks-list.component';
import {SharedModule} from '../shared/shared.module';
import {ActivatedRouteSnapshot, Resolve, Router, RouterModule, Routes} from '@angular/router';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {DeckCreatorComponent} from './deck-creater/deck-creator.component';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule, HttpResponse} from '@angular/common/http';
import {RippleModule} from 'primeng/ripple';
import {Deck} from './deck.model';
import {EMPTY, Observable, of} from 'rxjs';
import {DeckService} from './deck.service';
import {flatMap} from 'rxjs/operators';
import {MessageModule} from 'primeng/message';

@Injectable({providedIn: 'root'})
export class DeckResolve implements Resolve<Deck> {
  constructor(private service: DeckService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot): Observable<Deck> | Observable<never> {
    const id = route.params.id;
    if (id) {
      return this.service.find(id).pipe(
        flatMap((res: HttpResponse<Deck>) => {
          if (res.body) {
            debugger
            return of(res.body);
          } else {
            this.router.navigate(['404']);
            return EMPTY;
          }
        })
      );
    }
    return EMPTY;
  }
}


const deckRouts: Routes = [
  {
    path: '',
    component: DecksListComponent
  },
  {
    path: 'new',
    component: DeckCreatorComponent
  },
  {
    path: ':id',
    component: DeckItemComponent,
    resolve: {
      deck: DeckResolve
    }
  }
];


@NgModule({
  declarations: [DeckItemComponent, DecksListComponent, DeckCreatorComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(deckRouts),
    TableModule,
    CommonModule,
    InputTextModule,
    HttpClientModule,
    RippleModule,
    FileUploadModule,
    MessageModule
  ]
})
export class DeckModule {
}
