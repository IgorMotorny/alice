import { Effect, Actions, toPayload } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Action } from '@ngrx/store';
import { actionTypes } from './book.actions';
import { GoogleDriveService } from 'app/services';
import { go } from '@ngrx/router-store';
import {
  FileSelectedAction,
  OpenFileAction,
} from './book.actions';

@Injectable()
export class BookEffects {
  @Effect()
  $selectFile = this.actions$
    .ofType(actionTypes.OPEN_PICKER)
    .switchMap(() => this.drive.open()
      .do((file: any) => this.router.navigate(['/book', file.id]))
      .map(() => new FileSelectedAction())
    );

  @Effect()
  $loadFile: Observable<Action> = this.actions$
    .ofType(actionTypes.LOAD_FILE)
    .map(toPayload)
    .switchMap((id) =>
      this.drive.getFileInner(id)
        .map((book: any) => new OpenFileAction(book))
    );

  constructor(
      private actions$: Actions,
      private router: Router,
      private drive: GoogleDriveService,
  ) { }
}
