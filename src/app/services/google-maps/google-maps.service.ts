import { Injectable } from '@angular/core';
declare var google;
declare var _;

@Injectable()
export class GoogleMapsService {
  key = 'AIzaSyAt-N-ptBqGUiJEZAHIHP15u3Zwg7arjPg';
  infoWindow: any;
  el: HTMLScriptElement;
  resolvePromise = null;
  isReady: boolean;
  location: { lat: number; lng: number; };

  constructor() {
    this.createScript().updateLocation();

    setInterval(this.updateLocation, 30000);
  }

  createScript() {
    const el = document.createElement('script');
    el.src = this.url;
    el.onload = this.initCallback;
    document.body.appendChild(el);
    return this;
  }

  api(): Promise<any> {
    return this.isReady
      ? Promise.resolve(google)
      : new Promise(r => this.resolvePromise = r);
  }

  initCallback = () => {
    this.isReady = true;
    if (this.resolvePromise) { this.resolvePromise(google); }
  }

  get url() {
    return `https://maps.googleapis.com/maps/api/js?key=${this.key}&libraries=places`;
  }

  getLocation() {
    if (this.location) {
      return Promise.resolve(this.location);
    }

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition((data) => {
        this.location = { lat: data.coords.latitude, lng: data.coords.longitude };
        resolve(this.location);
      }
      );
    });
  }

  updateLocation = (): GoogleMapsService  => {
    navigator.geolocation.getCurrentPosition((data) => {
      this.location = { lat: data.coords.latitude, lng: data.coords.longitude };
    });
    return this;
  }

  createMap(el: HTMLElement, props: any = {}): Promise<any> {
    return new Promise(resolve => this.api().then(g => {
      const defaults = {
        center: { lat: 50.4557292, lng: 30.514657600000003 },
        zoom: 3,
        mapTypeId: g.maps.MapTypeId.ROADMAP,
        zoomControl: true,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: true,
        rotateControl: true
      };
      resolve(new g.maps.Map(el, _.extend(props, defaults)));
    }));
  }

  addMarker(map) {
    return new Promise(resolve => this.api().then(g => {
      const handler = map.addListener('click', e => {
        const marker = new google.maps.Marker({
          position: e.latLng,
          map,
          animation: g.maps.Animation.DROP,
        });
        g.maps.event.removeListener(handler);
        resolve(marker);
      });
    }));
  }


  drawPolygon(map) {
    const polygonProps = {
      strokeColor: '#000000',
      strokeOpacity: 0.9,
      strokeWeight: 3,
      fillColor: '#' + Math.floor(Math.random() * 16777215).toString(16),
      editable: true,
    };
    return new Promise(resolve => {
      this.api().then(g => {
        const poly = new g.maps.Polygon(polygonProps);
        poly.setMap(map);
        const handler = map.addListener('click', e =>  poly.getPath().push(e.latLng));
        const stopDrawing = () => {
          g.maps.event.removeListener(handler);
          poly.setMap(null);
          return {
            coords: poly.getPath().getArray().map(c => ({ lat: c.lat(), lng: c.lng() })),
          };
        };
        resolve(stopDrawing);
      });
    });
  }

}
