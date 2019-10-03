import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentListComponent } from '../apartment-list/apartment-list.component';
import { ApartmentRoutingModule } from './apartment-routing.module';
import { OneApartmentComponent } from './one-apartment/one-apartment.component';

import { ApartmentService } from './services/apartment.service';

@NgModule({
  declarations: [ApartmentListComponent, OneApartmentComponent],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
  ],
  providers: [
    ApartmentService,
  ]
})
export class ApartmentModule { }
