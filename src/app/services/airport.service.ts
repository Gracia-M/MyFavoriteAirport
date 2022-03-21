/* eslint-disable @typescript-eslint/no-inferrable-types */

import { Injectable } from '@angular/core';
import { Storage } from '@capacitor/storage';
import { Platform } from '@ionic/angular';
import { AddAirportOptions, Airport, airportsList } from '../airport';
import { PictureService } from './picture.service';

@Injectable({
  providedIn: 'root'
})
export class AirportService {

  public newAirportsList: Airport[] = airportsList.slice();
  // eslint-disable-next-line @typescript-eslint/naming-convention
  public AIRPORT_STORAGE_PACKAGE: string = 'drower';

  constructor(private platform: Platform,
              private pictureService: PictureService) { }

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

    console.log(JSON.stringify(this.newAirportsList));

    Storage.set(
      {
        key: this.AIRPORT_STORAGE_PACKAGE,
        value: JSON.stringify(this.newAirportsList)
      }
    );
  }

  public async loadSavedAirports() {
    const airportsJson = await Storage.get(
      {
        key: this.AIRPORT_STORAGE_PACKAGE
      }
    );

    console.log('chargement...');
    console.log(airportsJson);

    this.newAirportsList = JSON.parse(airportsJson.value);
    console.log(airportsJson);
    if(!this.platform.is('hybrid')){

      // eslint-disable-next-line prefer-const
      for(let anAirport of this.newAirportsList){
        console.log(JSON.stringify(anAirport));
        if(anAirport.picture){
          const picFilePath= anAirport.picture.filePath;

          // console.log("pancakeService - picture file path: " +picFilePath);
          const fileData = await this.pictureService.readPhotoDataBase64(picFilePath);

        //  console.log("found data: " + fileData)

          anAirport.picture.webViewPath = fileData;
        }
      }
    }
  }
}
