import { AuthenticationService } from './services/authentication.service';

import { GeolocationService } from './services/geolocation.service';

import { AuthGuardService } from './services/auth-guard.service';
import { AppRoutesModule } from './app-routes.module';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PublicComponent } from './layouts/public/public.component';
import { SecureComponent } from './layouts/secure/secure.component';
import { LoginComponent } from './public/login/login.component';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

import 'hammerjs';

//trainer (move this to seperate module)
import { TrainerFormComponent } from './secure/trainer/trainer-form/trainer-form.component';
import { TrainerHomeComponent } from './secure/trainer/trainer-home/trainer-home.component';
import { TrainerDetailsComponent } from './secure/trainer/trainer-details/trainer-details.component';
import { TrainerScheduleComponent } from './secure/trainer/trainer-schedule/trainer-schedule.component';
import { TrainerClientsListComponent } from './secure/trainer/trainer-clients-list/trainer-clients-list.component';
import { TrainerRequestListComponent } from './secure/trainer/trainer-request-list/trainer-request-list.component';
import { TrainerProfileComponent } from './secure/trainer/trainer-profile/trainer-profile.component';

//common (move this to seperate module)
import { DayScheduleComponent } from './secure/common/day-schedule/day-schedule.component';
import { FeedComponent } from './secure/common/feed/feed.component';

import { RegisterComponent } from './public/register/register.component';
import { MessageListComponent } from './secure/common/message-list/message-list.component';

//client (move this to seperate module)
import { ClientComponent } from './secure/client/client.component';
import { ClientSearchTrainerComponent } from './secure/client/client-search-trainer/client-search-trainer.component';
import { ClientProfileComponent } from './secure/client/client-profile/client-profile.component';
import { ClientTrainerListComponent } from './secure/client/client-trainer-list/client-trainer-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SchedulerService } from './services/scheduler.service';
import { SearchUserComponent } from './secure/common/search-user/search-user.component';
import { SearchService } from './services/search.service';
import { ClientPaymentComponent } from './secure/client/client-payment/client-payment.component';
import {PaymentService} from './services/payment.service';


@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
    SecureComponent,
    LoginComponent,
    TrainerFormComponent,
    TrainerHomeComponent,
    TrainerDetailsComponent,
    TrainerScheduleComponent,
    TrainerClientsListComponent,
    TrainerRequestListComponent,
    DayScheduleComponent,
    FeedComponent,
    RegisterComponent,
    MessageListComponent,
    TrainerProfileComponent,
    MessageListComponent,
    TrainerProfileComponent,
    ClientProfileComponent,
    ClientComponent,
    ClientSearchTrainerComponent,
    ClientTrainerListComponent,
    SearchUserComponent,
    ClientPaymentComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutesModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule




  ],
  providers: [
    AuthGuardService,
    GeolocationService,
    SchedulerService,
    AuthenticationService,
    SearchService,
    PaymentService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
