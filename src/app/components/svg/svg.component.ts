import { Component, OnChanges, Input, ElementRef } from '@angular/core';
import { Http } from '@angular/http';
import { DomSanitizer } from '@angular/platform-browser';

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-svg',
  template: `<span [innerHtml]="html"></span>`
})
export class SvgComponent implements OnChanges {
  @Input() src: string;

  html: any;
  constructor(private http: Http, private host: ElementRef, private sanitizer: DomSanitizer) { }

  ngOnChanges(changes) {
    this.http.get(changes.src.currentValue)
      .map(r => r.text())
      .subscribe((svg) => {
        this.html = this.sanitizer.bypassSecurityTrustHtml(svg);
      });
  }

}
