
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

//common (move this to seperate module)
import { DayScheduleComponent } from './secure/common/day-schedule/day-schedule.component';
import { FeedComponent } from './secure/common/feed/feed.component';
import { MessageListComponent } from './secure/common/message-list/message-list.component';

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
    MessageListComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    AppRoutesModule,
    FormsModule,
    BrowserAnimationsModule
    
    
    
  ],
  providers: [
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
