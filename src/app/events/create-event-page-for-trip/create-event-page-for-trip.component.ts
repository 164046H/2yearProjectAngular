import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Event} from './../_interfaces/event';
import {  RepositoryService} from './../../ShareData/repository.service';
import { $ } from 'protractor';
import { STRING_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-create-event-page-for-trip',
  templateUrl: './create-event-page-for-trip.component.html',
  styleUrls: ['./create-event-page-for-trip.component.css']
})
export class CreateEventPageForTripComponent implements OnInit {
  public errorMessage: string='';
    public eventForm: FormGroup;
    public msg: any;

    regForms = [{'id':1, 'name':'One day trip'}, {'id':2, 'name': 'Two day trip'}, {'id':'/events/createEventPageForTrip', 'name':'Blood donation'}, {'id':4, 'name': 'Year end party'}];
    eventTypes = [{'id':' Trip', 'name':'One day trip'}, {'id':' Trip', 'name': 'Two day trip'}, {'id':' BloodDonation', 'name':'Blood donation'}, {'id':' YearEndParty', 'name': 'Year end party'}];

  constructor(private repository : RepositoryService) { }

  ngOnInit() {

    this.eventForm = new FormGroup({
     
      eventTitle:new FormControl('',[Validators.required]),
      eventDescription:new FormControl('',[Validators.required]),
      destination:new FormControl('',[Validators.required]),
      startDate:new FormControl('',[Validators.required]),
      endDate:new FormControl('',[Validators.required]),
      type:new FormControl('',[Validators.required]),
      url:new FormControl('',[Validators.required]),
      
    // year:new FormControl('',[Validators.required]),
     
      
    })

  }

  public validateControl(controlName: string) {
    if (this.eventForm.controls[controlName].invalid && this.eventForm.controls[controlName].touched)
      return true;

    return false;
  }

  public hasError(controlName: string, errorName: string) {
    if (this.eventForm.controls[controlName].hasError(errorName))
      return true;

    return false;
  }
  public touchanddirty(controlName: string) {
    if (this.eventForm.controls[controlName].value !=="" && this.eventForm.controls[controlName].touched )
      return true;

    return false;
  }

  public createEvent(eventFormValue) {

    var date = new Date();
    var date1 = date.toString();
    var year = date1.split(' ')[3];
    
    
    if (this.eventForm.valid) {
      
      this.executeEventCreation(eventFormValue);
     
    }
  }

  private executeEventCreation(eventFormValue) {
  
    let event: Event = {
      eventTitle: eventFormValue.eventTitle,
      eventDescription: eventFormValue.eventDescription,
      destination:eventFormValue.destination,
      startDate: eventFormValue.startDate,
      endDate: eventFormValue.endDate,
      pKey:`${eventFormValue.startDate.split('-')[0]}${eventFormValue.type}`,
      url:eventFormValue.url,
     
     
    };
    console.log(event.url);
    console.log(event.pKey);
    let apiUrl = 'createEvent';
  
    this.repository.postData(apiUrl, event)
      .subscribe(res => {
       // this.router.navigate(['/profile/list']);
          this.msg="Event is succesfully created";
        },
        (error => {
          this.msg="Event can't be create! Please check entered details again";
        //  this.errorHandler.handleError(error);
        //  this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

}
