import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentListComponent } from '../apartment-list/apartment-list.component';
import { ApartmentRoutingModule } from './apartment-routing.module';



@NgModule({
  declarations: [ApartmentListComponent],
  imports: [
    CommonModule,
    ApartmentRoutingModule,
  ]
})
export class ApartmentModule { }
