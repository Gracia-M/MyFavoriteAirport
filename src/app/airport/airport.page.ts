import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Airport } from '../airport';
import { AirportService } from '../services/airport.service';

@Component({
  selector: 'app-airport',
  templateUrl: './airport.page.html',
  styleUrls: ['./airport.page.scss'],
})
export class AirportPage implements OnInit {

  myAirport: Airport;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private airportService: AirportService) { }

  ngOnInit() {
    const paramMap = this.activatedRoute.snapshot.paramMap;
    const idAirport = Number(paramMap.get('id'));

    this.myAirport = this.airportService.newAirportsList.find(airport=> airport.id == idAirport);
  }

  returnHome() {
    this.router.navigateByUrl("/home");
  }

  showMap() {
    const lati = this.myAirport.location.lati;
    const longi = this.myAirport.location.longi;
    const zoom = 15;
    const link = "https://www.google.maps/@"+lati+","+longi+","+zoom+"z";

    window.open(link);

  }

}
