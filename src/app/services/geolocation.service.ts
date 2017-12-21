import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

declare var google: any;

@Injectable()
export class GeolocationService {

  private coords: Coordinates;

  private autocomplete: any;
  private autocompleteOptions: any;

  private mapProperties: any;
  private map: any;

  constructor() {
    this.setCoordinates();
    this.setAutoCompleteOptions();
   }

  private setCoordinates()
  {
    navigator.geolocation.getCurrentPosition(position => {     
      this.coords = position.coords;
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

  private setMapProperties(position: Position)
  {
    this.mapProperties = {
      center: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
      zoom: 10,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
  }

  public getCoordinates(): Coordinates
  {
    return this.coords;
  }

  // Set autocomplete feature to textinput
  // Bias the autocomplete object to the user's geographical location,
  // as supplied by the browser's 'navigator.geolocation' object.
  // this method must be used within ngOnInit
  public generateAddressAutofill(textInputId: HTMLElement) {
    navigator.geolocation.getCurrentPosition(position => {   
      console.log(position);  
      this.coords = position.coords;
      this.autocomplete = new google.maps.places.Autocomplete(textInputId, this.autocompleteOptions);

      var geolocation = {
        lat: this.coords.latitude,
        lng: this.coords.longitude,
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: this.coords.accuracy
      });

      this.autocomplete.setBounds(circle.getBounds());

    }, (error) => {
      this.coords = null;
      console.log(error);
    });
  }

  // Set roadmap feature to div
  // must set width and height explicitly in html
  // uses current location as center of the map
  // this method must be used within ngOnInit
  public generateRoadMap(divID: HTMLElement) {
    navigator.geolocation.getCurrentPosition(position => {
      this.setMapProperties(position);
      this.map = new google.maps.Map(divID, this.mapProperties);
    }, (error) => {
      this.map = null;
      console.log(error);
    });
  }

 

  

}

