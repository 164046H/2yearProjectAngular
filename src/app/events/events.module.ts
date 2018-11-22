import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { CreateEventPageForTripComponent } from './create-event-page-for-trip/create-event-page-for-trip.component';
import { ViewEventPageComponent } from './view-event-page/view-event-page.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path:'createEventPageForTrip', component:CreateEventPageForTripComponent},
      {path:'viewEventPage', component:ViewEventPageComponent}  
    ]),
  ],
  declarations: [CreateEventPageForTripComponent, ViewEventPageComponent,]
})
export class EventsModule { }