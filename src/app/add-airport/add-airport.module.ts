import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddAirportPageRoutingModule } from './add-airport-routing.module';

import { AddAirportPage } from './add-airport.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddAirportPageRoutingModule
  ],
  declarations: [AddAirportPage]
})
export class AddAirportPageModule {}
