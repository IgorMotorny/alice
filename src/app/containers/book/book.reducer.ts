import { Action } from '@ngrx/store';
import { actionTypes } from './book.actions';

export const initialState = {
  book: null,
};

export function bookReducer(state = initialState, action) {
  const actions = {
    [actionTypes.OPEN_PICKER]: () => Object.assign({}, state, { book: null }),
    [actionTypes.OPEN_FILE]: () => Object.assign({}, state, { book: action.payload.split('\n') }),
  };
  return actions[action.type] ? actions[action.type]() : state;
}
