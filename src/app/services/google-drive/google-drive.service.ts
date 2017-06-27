import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable, Subject } from 'rxjs/Rx';
import conf from 'conf/config';

declare var gapi;
declare var google;

@Injectable()
export class GoogleDriveService {
  apiKey = conf.apiKey;
  clientId = conf.clientId;
  picker: any;
  file = new Subject();

  constructor(private http: Http) {
    gapi.client.setApiKey(this.apiKey);
    gapi.client.load('drive', 'v2', () => this.doAuth(false));
    google.load('picker', '1', { callback: this.pickerApiLoaded });
  }

  open = () => Observable.fromPromise(this.doAuth(true)
    .then(this.showPicker)
    .then(this.getFile));

  getFileInner = (id): Observable<string> => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${gapi.auth.getToken().access_token}`);

    return this.http.get(
      `https://www.googleapis.com/drive/v3/files/${id}?alt=media`,
      { headers }
    ).map((res) => res.text());
  }

  private showPicker = () => new Promise((resolve) => {
    const accessToken = gapi.auth.getToken().access_token;
    this.picker = new google.picker.PickerBuilder()
      .addView(google.picker.ViewId.DOCUMENTS)
      .setAppId(this.clientId)
      .setOAuthToken(accessToken)
      .setCallback((data) => {
        if (data[google.picker.Response.ACTION] !== google.picker.Action.PICKED) { return; }
        resolve(data);
      })
      .build()
      .setVisible(true);
  })

  private getFile = (data) => new Promise((resolve) => {
    const file = data[google.picker.Response.DOCUMENTS][0];
    const fileId = file[google.picker.Document.ID];
    const request = gapi.client.drive.files.get({ fileId });

    request.execute(resolve);
  })

  private pickerApiLoaded = () => { };

  private doAuth = (immediate: boolean) => {
    if (gapi.auth.getToken()) { return Promise.resolve(); }

    return new Promise((resolve) => {
      gapi.auth.authorize({
        client_id: this.clientId + '.apps.googleusercontent.com',
        scope: 'https://www.googleapis.com/auth/drive.readonly',
        immediate
      }, resolve);
    });
  }

}
