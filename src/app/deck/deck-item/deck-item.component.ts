import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Deck} from '../deck.model';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-deck-item',
  templateUrl: './deck-item.component.html',
  styleUrls: ['./deck-item.component.scss']
})
export class DeckItemComponent implements OnInit {

  public resourceUrl = environment.SERVER_API_URL + '/data/';

  constructor(private activatedRoute: ActivatedRoute) {
  }

  deck: Deck;

  ngOnInit() {
    this.activatedRoute.data.subscribe(res => {
      this.deck = res.deck;
    });
  }

}
