import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'alice-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {
  @Input() index: number;
  @Output() read = new EventEmitter();
  @Output() activeChange = new EventEmitter();

  readThis() {
    this.read.emit(this.index);
  }

  setActive() {
    this.activeChange.emit(this.index);
  }
}
