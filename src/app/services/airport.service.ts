import { Injectable } from '@angular/core';
import { AddAirportOptions, Airport, airportsList } from '../airport';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  public newAirportsList: Airport[] = airportsList.slice();

  constructor() { }

  public addAirport(newAirport: AddAirportOptions) {

    const newId= this.newAirportsList.length + 1;

    const addedAirport= {
      id: newId,
      code: newAirport.code,
      name: newAirport.name,
      city: newAirport.city,
      country: newAirport.country,
      picture: newAirport.picture,
      description: newAirport.description,
      location: newAirport.location
    };

    this.newAirportsList.push(addedAirport);
  }
}
