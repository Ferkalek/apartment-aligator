import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

import { ApartmentService } from '../services/apartment.service';
import { IApartment } from '../models/apartment.model';

@Component({
  selector: 'aa-one-apartment',
  templateUrl: './one-apartment.component.html',
  styleUrls: ['./one-apartment.component.scss']
})
export class OneApartmentComponent implements OnInit {
  oneApartment$: Observable<IApartment>;
  // oneApartment: IArguments;
  id: number;

  constructor(
    private _apartmentService: ApartmentService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = +this._route.snapshot.paramMap.get('id');
    this.oneApartment$ = this._apartmentService.getOneApartment(this.id);
    // this._apartmentService.getOneApartment(this.id).subscribe(a => {
    //   this.oneApartment = a;

    // });
  }

}
