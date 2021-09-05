import {NgModule} from '@angular/core';
import {DeckItemComponent} from './deck-item/deck-item.component';
import {DecksListComponent} from './decks-list/decks-list.component';
import {SharedModule} from '../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {TableModule} from 'primeng/table';
import {CommonModule} from '@angular/common';
import {DeckCreatorComponent} from './deck-creater/deck-creator.component';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {RippleModule} from 'primeng/ripple';

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
    FileUploadModule
  ]
})
export class DeckModule {
}
