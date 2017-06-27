import { ActionReducer } from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from 'environments/environment';
import { combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { compose } from '@ngrx/core/compose';

import { bookReducer } from './book/book.reducer';

const reducers = {
  book: bookReducer
};

const developmentReducer: ActionReducer<any> = compose(storeFreeze, combineReducers)(reducers);
const productionReducer: ActionReducer<any> = combineReducers(reducers);

export function appReducer(state: any, action: any) {
  return environment.production
    ? productionReducer(state, action)
    : developmentReducer(state, action);
}
