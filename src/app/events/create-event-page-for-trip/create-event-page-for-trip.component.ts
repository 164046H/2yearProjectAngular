import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';
import { Event} from './../_interfaces/event';
import {  RepositoryService} from './../../ShareData/repository.service';
import { $ } from 'protractor';

@Component({
  selector: 'app-create-event-page-for-trip',
  templateUrl: './create-event-page-for-trip.component.html',
  styleUrls: ['./create-event-page-for-trip.component.css']
})
export class CreateEventPageForTripComponent implements OnInit {
  public errorMessage: string='';
    public eventForm: FormGroup;

  constructor(private repository : RepositoryService) { }

  ngOnInit() {

    this.eventForm = new FormGroup({
     
      eventTitle:new FormControl('',[Validators.required]),
      eventDescription:new FormControl('',[Validators.required]),
      destination:new FormControl('',[Validators.required]),
      startDate:new FormControl('',[Validators.required]),
      endDate:new FormControl('',[Validators.required]),
    year:new FormControl('',[Validators.required]),
     
      
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
      pKey:`${eventFormValue.year}Trip`,
      url:"jdskkf/hdjksh"
     
     
    };
    
    console.log(event.pKey);
    let apiUrl = 'createEvent';
  
    this.repository.postData(apiUrl, event)
      .subscribe(res => {
       // this.router.navigate(['/profile/list']);
          
        },
        (error => {
        //  this.errorHandler.handleError(error);
        //  this.errorMessage = this.errorHandler.errorMessage;
        })
      )
  }

}
