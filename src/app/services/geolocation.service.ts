import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

declare var google: any;

@Injectable()
export class GeolocationService {

  private coords: Coordinates;
  private autocomplete: any;
  private autocompleteOptions: any;

  constructor() {
    console.log('geolocation service constructor');
    this.setCoordinates();
    this.setAutoCompleteOptions();
   }

  private setCoordinates()
  {
    navigator.geolocation.getCurrentPosition(position => {     
      this.coords = position.coords;
      console.log(this.coords);
      
     
     

    }, (error) => {
      this.coords = null;
      console.log(error);
    });
  }

  private setAutoCompleteOptions()
  {
    this.autocompleteOptions = {
      types: ['address']
    };
  }

  public getCoordinates(): Coordinates
  {
    return this.coords;
  }

  // Set autocomplete to textinput
  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  public autoFillAddress(textInputId: HTMLElement) {

    
    this.autocomplete = new google.maps.places.Autocomplete(textInputId, this.autocompleteOptions);

    var geolocation = {
      lat: this.coords.latitude,
      lng: this.coords.longitude,
    };
    var circle = new google.maps.Circle({
      center: this.coords,
      radius: this.coords.accuracy
    });
    this.autocomplete.setBounds(circle.getBounds());
   // this.autocomplete = new google.maps.places.Autocomplete(input, options);
  }

  

}

