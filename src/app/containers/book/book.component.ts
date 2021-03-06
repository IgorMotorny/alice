import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { GoogleDriveService, VoiceService} from 'app/services';

import {
  LoadFileAction,
  OpenPickerAction,
} from './book.actions';

@Component({
  selector: 'alice-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  book: Array<string>;
  active: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<any>,
    private router: Router,
    private drive: GoogleDriveService,
    private voice: VoiceService,
  ) { }

  ngOnInit() {
    this.route.params.take(1).subscribe(params => {
      if (params['id']) {
        this.store.dispatch(new LoadFileAction(params['id']));
      } else {
        this.store.dispatch(new OpenPickerAction());
      }
    });

    this.store.select('book').subscribe((state: any) => {
      this.book = state.book;
      // this.active = state.active;
    });
  }

  speek(index) {
    this.setActive(index);
    this.voice.say({
      text: this.book[index],
      ended: this.playNext,
      started: null,
    });
  }

  playNext = () => {
    if (this.active + 1 >= this.book.length) { return; }

    this.speek(this.active + 1);
  }

  stop() {
    this.voice.stop();
  }

  setActive = (index) => {
    this.active = index;
    // document.querySelector(`.p-${this.active}`).scrollIntoView();
    // this.ref.detectChanges();
  }

}
