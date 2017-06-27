import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app.routing.module';

import { AppComponent } from './containers/app/app.component';

import components from './components';
import containers from './containers';
import { services } from './services';

import { appReducer } from './containers/reducers';

import { EffectsModule } from '@ngrx/effects';
import { BookEffects } from './containers/book/book.effects';

@NgModule({
  declarations: [
    ...containers,
    ...components,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    StoreModule.provideStore(appReducer),
    RouterStoreModule.connectRouter(),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    EffectsModule.run(BookEffects),
  ],
  providers: [
    ...services,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
