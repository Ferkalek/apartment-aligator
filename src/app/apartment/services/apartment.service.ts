import { Injectable } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { of } from 'rxjs';

import { apartments } from '../models/apartment.model';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {

  constructor(
    private _http: HttpClient
  ) { }

  getApartments() {
    return of(apartments);
  }
}
