import {NgModule} from '@angular/core';
import {DeckItemComponent} from './deck-item/deck-item.component';
import {DecksListComponent} from './decks-list/decks-list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const deckRouts: Routes = [
  {
    path: '',
    component: DecksListComponent
  },
  {
    path: ':id',
    component: DeckItemComponent,
  }
];


@NgModule({
  declarations: [DeckItemComponent, DecksListComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(deckRouts)
  ]
})
export class DeckModule {
}
