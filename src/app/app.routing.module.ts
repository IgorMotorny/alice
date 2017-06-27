import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  NotFoundComponent,
  BookComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'book',
    component: BookComponent,
  },
  {
    path: 'book/:id',
    component: BookComponent,
  },
  // {
  //   path: 'book/:id/:paragraph',
  //   component: BookComponent,
  // },
  {
    path: '**',
    component:  NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
