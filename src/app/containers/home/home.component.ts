import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { VoiceService, GoogleDriveService } from 'app/services';
import { environment } from 'environments/environment';

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
    private drive: GoogleDriveService,
  ) { }

  ngOnInit() {  }

  openPicker() {
    this.drive.open();
    this.drive.file.subscribe((text: string) => {
      console.log(text);
      this.initBook(text.split('\n').map(str => str.trim()).filter(str => str.length));
    });
  }

  initBook(book) {
    this.book = book;
    this.ref.detectChanges();
    this.route.params.subscribe(params => {
      const active = Number(params['paragraph']);
      if (!active) { return; }

      this.setActive(active);
      setTimeout(() => {
        const el = document.querySelector(`.p-${active}`);
        if (el) { el.scrollIntoView(); }
      }, 1000);

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
