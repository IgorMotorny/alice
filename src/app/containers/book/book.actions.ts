import { Action } from '@ngrx/store';

export const actionTypes = {
  OPEN_PICKER: '[Book] Open picker',
  FILE_SELCTED: '[Book] File selected',
  LOAD_FILE: '[Book] Load file',
  OPEN_FILE: '[Book] Open file',
};


export class OpenPickerAction implements Action {
  type = actionTypes.OPEN_PICKER;
  constructor() { }
}

export class FileSelectedAction implements Action {
  type = actionTypes.FILE_SELCTED;
  constructor() { }
}

export class LoadFileAction implements Action {
  type = actionTypes.LOAD_FILE;
  constructor(public payload) { }
}

export class OpenFileAction implements Action {
  type = actionTypes.OPEN_FILE;
  constructor(public payload) { }
}
