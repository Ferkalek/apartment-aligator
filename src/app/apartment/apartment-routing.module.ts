import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentListComponent } from '../apartment-list/apartment-list.component';
import { OneApartmentComponent } from './one-apartment/one-apartment.component';


const routes: Routes = [
  { 
    path: '',
    component: ApartmentListComponent,
  },
  { 
    path: ':id',
    component: OneApartmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentRoutingModule { }
