import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEventPageForTripComponent } from './create-event-page-for-trip/create-event-page-for-trip.component';
import { ViewEventPageComponent } from './view-event-page/view-event-page.component';
import { OneDayTripComponent } from './one-day-trip/one-day-trip.component';
import { TwoDayTripComponent } from './two-day-trip/two-day-trip.component';
import { BloodDonationComponent } from './blood-donation/blood-donation.component';
import { YearEndPartyComponent } from './year-end-party/year-end-party.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'createEventPageForTrip', component:CreateEventPageForTripComponent},
      {path:'viewEventPage', component:ViewEventPageComponent},
      {path:'oneDayTrip/:id', component:OneDayTripComponent},
      {path:'twoDayTrip/:id', component:TwoDayTripComponent}       
    ]),
  ],
  declarations: [CreateEventPageForTripComponent, ViewEventPageComponent, OneDayTripComponent, TwoDayTripComponent, BloodDonationComponent, YearEndPartyComponent,]
})
export class EventsModule { }