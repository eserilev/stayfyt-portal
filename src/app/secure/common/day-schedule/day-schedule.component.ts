import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.css']
})
export class DayScheduleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

var profile = {
  firstName: "",
  lastName: "",
  phone: "",
  isTrainer: "",
  location : "locationObject",
  username: "",
  password: "",
}

var appt = 
{
  location: {lat: "", lng: "", city:"", state:"", zip:"", street:""} ,
  client: "clientObject",
  trainer: "trainerObjcet",
  startTime:"10:00am",
  endTime: "10:30am",
  category: "yoga",
}
