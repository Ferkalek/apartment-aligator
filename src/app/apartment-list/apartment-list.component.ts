import { Component, OnInit } from '@angular/core';
import { ApartmentService } from '../apartment/services/apartment.service';
import { Observable } from 'rxjs';
import { IApartment } from '../apartment/models/apartment.model';

@Component({
  selector: 'aa-apartment-list',
  templateUrl: './apartment-list.component.html',
  styleUrls: ['./apartment-list.component.scss']
})
export class ApartmentListComponent implements OnInit {
  apartments$: Observable<IApartment[]>;
  constructor(
    private _apartmentService: ApartmentService,
  ) { }

  ngOnInit() {
    this.apartments$ = this._apartmentService.getApartments();
  }

}
