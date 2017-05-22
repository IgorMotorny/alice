import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VoiceService } from 'app/services';

declare var responsiveVoice;
@Component({
  selector: 'alice-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  book: Array<string>;
  active: number;

  constructor(
    private http: Http,
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router,
    private voice: VoiceService,
  ) { }

  ngOnInit() {
    this.http.get('/assets/books/test.json')
      .subscribe(r => this.initBook(r.json()));
  }

  initBook(book) {
    this.book = book;
    this.route.params.subscribe(params => {
      const active = params['paragraph'];
      if (!active) { return; }

      this.setActive(active);
      setTimeout(() => {
        document.querySelector(`.p-${active}`).scrollIntoView();
      }, 300);

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
    document.querySelector(`.p-${this.active}`).scrollIntoView();
    this.ref.detectChanges();
  }

}
