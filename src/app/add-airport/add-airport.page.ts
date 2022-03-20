import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLocation, UserPhoto } from '../airport';
import { AirportService } from '../services/airport.service';
import { LocationService } from '../services/location.service';
import { PictureService } from '../services/picture.service';

@Component({
  selector: 'app-add-airport',
  templateUrl: './add-airport.page.html',
  styleUrls: ['./add-airport.page.scss'],
})
export class AddAirportPage implements OnInit {

  myPicture: UserPhoto;
  myLocation: UserLocation;

  constructor(private pictureService: PictureService,
              private airportService: AirportService,
              private locationService: LocationService,
              private router: Router) { }

  ngOnInit() {
  }

  async onAddPicture() {
    this.myPicture = await this.pictureService.getNewPhoto()

  }

  async onAddPosition() {
    this.myLocation = await this.locationService.getMyLocation()

  }

  onAddAirport(submittedForm: NgForm) {
    if(submittedForm.valid) {

      this.airportService.addAirport(
        {
          code: submittedForm.value.myCode,
          name: submittedForm.value.myName,
          city: submittedForm.value.myCity,
          country: submittedForm.value.myCountry,
          description: submittedForm.value.myDescription,
          picture:this.myPicture,
          location: this.myLocation
        }
      );
      this.router.navigateByUrl('/home');

    }else {
      alert('Tous les champs sont obligatoires !');
    }
  }

}
