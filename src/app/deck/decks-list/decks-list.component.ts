import {Component, OnInit} from '@angular/core';
import {DeckService} from '../deck.service';
import {Deck} from '../deck.model';

@Component({
  selector: 'app-decks-list',
  templateUrl: './decks-list.component.html',
  styleUrls: ['./decks-list.component.scss']
})
export class DecksListComponent implements OnInit {

  decks: Deck[] = [];
  isLoading = false;
  hadError = false;

  constructor(private deckService: DeckService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.deckService.query().subscribe(res => {
      this.isLoading = false;
      if (res.body) {
        this.decks = res.body;
        this.hadError = false;
      } else {
        this.hadError = true;
      }
    }, err => {
      this.hadError = true;
      this.isLoading = false;
    });
  }

}
