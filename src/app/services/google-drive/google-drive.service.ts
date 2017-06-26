import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
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
    gapi.client.load('drive', 'v2', () => this.doAuth(true));
    google.load('picker', '1', { callback: this.pickerApiLoaded });
  }

  open = () => {
    gapi.auth.getToken()
      ? this.showPicker()
      : this.doAuth(false, this.showPicker);
  }

  private onSelect = (file): void => {
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${gapi.auth.getToken().access_token}`);

    this.http.get(
      `https://www.googleapis.com/drive/v3/files/${file.id}?alt=media`,
      { headers }
    ).subscribe((res) => this.file.next(res.text()));
  }

  private showPicker = () => {
    const accessToken = gapi.auth.getToken().access_token;
    this.picker = new google.picker.PickerBuilder()
      .addView(google.picker.ViewId.DOCUMENTS)
      .setAppId(this.clientId)
      .setOAuthToken(accessToken)
      .setCallback(this.pickerCallback.bind(this))
      .build()
      .setVisible(true);
  }

  private pickerCallback (data) {
    if (data[google.picker.Response.ACTION] !== google.picker.Action.PICKED) { return; }

    const file = data[google.picker.Response.DOCUMENTS][0];
    const fileId = file[google.picker.Document.ID];
    const request = gapi.client.drive.files.get({ fileId });

    request.execute(this.fileGetCallback.bind(this));
  }

  private fileGetCallback (file) {
    if (this.onSelect) {
      this.onSelect(file);
    }
  }

  private pickerApiLoaded = () => { };

  private doAuth (immediate, callback?) {
    gapi.auth.authorize({
      client_id: this.clientId + '.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/drive.readonly',
      immediate
    }, callback);
  }

}
