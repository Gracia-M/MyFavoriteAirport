import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from '../airport';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myAirports : Airport [];

  constructor(private router: Router,
              private airportService: AirportService) {
  }

  ngOnInit() {
    this.myAirports= this.airportService.newAirportsList;
  }

  addNew() {
    this.router.navigateByUrl("/add-airport")
  }

}
