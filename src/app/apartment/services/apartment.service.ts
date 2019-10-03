import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { of, Observable } from 'rxjs';

import { apartments, IApartment } from '../models/apartment.model';

const URL_APARTMENTS = 'https://cors-anywhere.herokuapp.com/m.olx.pl/api/v1/offers/?offset=0&limit=10&filter_refiners=spell_checker&category_id=1307&region_id=4&city_id=8959';
// const URL_APARTMENTS = 'http://localhost:4200/api/v1/offers/?offset=0&limit=10&filter_refiners=spell_checker&category_id=1307&region_id=4&city_id=8959';

const headers1 = new HttpHeaders()
  .set('Access-Control-Allow-Origin', '*')
  .set('Access-Control-Allow-Methods', 'GET')
  .set('Content-Type', 'application/json');

@Injectable()
export class ApartmentService {
  headers2 = new HttpHeaders()
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Methods', 'GET')
    .set('Content-Type', 'application/json');

  constructor(
    private _http: HttpClient
  ) { }

  getApartments(): Observable<IApartment[]> {
    let headers = new HttpHeaders();
    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Methods', 'GET');
    headers = headers.append('Content-Type', 'application/json');
    
    console.log('---- ', headers);
    console.log('---- 1', headers1);
    console.log('---- 2', this.headers2);

    // return of(apartments);
    // return this._http.get<any>(URL_APARTMENTS);
    // return this._http.get<any>(URL_APARTMENTS, { headers: headers });
    return this._http.get<any>(URL_APARTMENTS, { headers: headers1 });
    // return this._http.get<any>(URL_APARTMENTS, { headers: this.headers2 });
  }

getOneApartment(id: number) {
  return of(
    apartments.find(a => +a.id === +id)
  )
}
}
