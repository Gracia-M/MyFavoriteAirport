import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddAirportPage } from './add-airport.page';

const routes: Routes = [
  {
    path: '',
    component: AddAirportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddAirportPageRoutingModule {}
