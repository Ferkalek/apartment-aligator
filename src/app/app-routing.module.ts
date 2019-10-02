import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApartmentModule } from './apartment/apartment.module';


const routes: Routes = [
  { 
    path: '',
    redirectTo: 'apartments',
    pathMatch: 'full',
  },
  {
    path: 'apartments',
    loadChildren: () => import('./apartment/apartment.module').then(a => a.ApartmentModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
