import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'alice-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  openBook() {
    this.router.navigate(['book']);
  }
}
