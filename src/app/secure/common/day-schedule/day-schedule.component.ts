import { Session } from './../../../models/session.model';
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

  sessions: Array<Session>;
  currentSessions: Array<Session>;
  events: string[] = [];

  constructor(private schedService: SchedulerService) {
    schedService.getSessions('new92').subscribe(res => {
      this.sessions = res;
    });
   }

  ngOnInit() {
  }

  myFilter = (d: Date): boolean => {  
    if(!this.sessions)
      return false;
   
    for(var i = 0; i < this.sessions.length; i++) {     
      if(this.checkDate(d, this.sessions[i].start)) {      
        return true;
      }
    }
    return false;
  }

  checkDate = (d:Date, toCheck:Date): boolean => {
    var check = new Date(toCheck.toString());
    if(d.getTime() == check.getTime()) {
        return true
    }
    return false;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
  }

  changeDate(event: MatDatepickerInputEvent<Date>) {
    var date = event.value;
    console.log(date);
    this.currentSessions = new Array<Session>();
    for(var i = 0; i < this.sessions.length; i++) {
      if(this.checkDate(date, this.sessions[i].start)) {
        console.log(this.sessions[i]);
        this.currentSessions.push(this.sessions[i]);
      }
    }
    //populate session list for current day
  }

  displayTime(d: Date): string {
    var temp = new Date(d.toString());
    var time = temp.toLocaleTimeString();
    return time;
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