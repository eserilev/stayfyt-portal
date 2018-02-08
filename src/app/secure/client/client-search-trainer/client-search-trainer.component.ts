import {Component, OnInit, ViewChild} from '@angular/core';
// import { SearchService } from './../../services/search.service';
import { User } from './../../../models/user.model';
// import { Session } from './../../../models/session.model';
import { Search } from '../../../services/authentication.service';


@Component({
  selector: 'client-search-trainer',
  templateUrl: './client-search-trainer.component.html',
  styleUrls: ['./client-search-trainer.component.css']
})
export class ClientSearchTrainerComponent implements OnInit {

  @ViewChild('f') form: any;

  trainerName: string;
  workoutType: string;

  constructor(
    private searchTrainers: Search
  ) { }

  ngOnInit() {
  }


  search() {
    if (this.form.valid) {
      var user = new User();
      user.name = this.trainerName;
      // user.location = this.location;
      // user.workout = this.workoutType;
     // this.searchTrainers.search(user); THIS LINE WORKS
    // use search function

      // search for matches
      // if matches this.workoutType;
      // trainerName = this.trainerName;
    }
  }
}
