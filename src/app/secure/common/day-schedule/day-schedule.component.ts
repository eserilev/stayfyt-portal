import { SchedulerService } from './../../../services/scheduler.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'day-schedule',
  templateUrl: './day-schedule.component.html',
  styleUrls: ['./day-schedule.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DayScheduleComponent implements OnInit {

  events: string[] = [];

  constructor(private schedService: SchedulerService) {

    schedService.getSessions('test').subscribe(res => {

      console.log(res);
    });
   }

  ngOnInit() {
  }

  myFilter = (d: Date): boolean => {
    //if session doesnt fall on date return false
    console.log(d);
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  changeDate(event: MatDatepickerInputEvent<Date>) {
    var date = event.value;
    //populate session list for current day
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


//mat-calendar-body-cell-content