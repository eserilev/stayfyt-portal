import { GeolocationService } from './../../../services/geolocation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'trainer-form',
  templateUrl: './trainer-form.component.html',
  styleUrls: ['./trainer-form.component.css']
})
export class TrainerFormComponent implements OnInit {

  constructor(private geoService: GeolocationService) { }

  ngOnInit() {

    //generate address autofill
    var geolocationInput = document.getElementById('geolocationInput');
   // this.geoService.generateAddressAutofill(geolocationInput);

    //generate road map
    var map = document.getElementById('map');
   // this.geoService.generateRoadMap(map);
  }

  submit(f: any) {
    
  }

 
}
