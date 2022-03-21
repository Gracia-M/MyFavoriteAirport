import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Airport } from '../airport';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  myAirports: Airport [];

  constructor(private router: Router,
              private airportService: AirportService) {
  }

  ngOnInit() {
    this.myAirports= this.airportService.newAirportsList;
    // this.loadAirports();
  }
  // async loadAirports() {
  //   await this.airportService.loadSavedAirports();

  // }

  addNew() {
    this.router.navigateByUrl('/add-airport');
  }

}
