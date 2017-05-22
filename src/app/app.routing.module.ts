import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
  HomeComponent,
  NotFoundComponent
} from './containers';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: ':paragraph',
    component: HomeComponent,
  },
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
