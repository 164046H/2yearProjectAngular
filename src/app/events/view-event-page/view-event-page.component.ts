import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositoryService} from './../../ShareData/repository.service';
import { Router,ParamMap } from '@angular/router';
import { Event} from './../_interfaces/event';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-view-event-page',
  templateUrl: './view-event-page.component.html',
  styleUrls: ['./view-event-page.component.css']
})
export class ViewEventPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,private repository :RepositoryService,private router: Router) { }
  public event:any;
  public eventId;
  public destOrVen;
  public image;
  ngOnInit() {
    
    this.eventId="2012-YearEndParty";
    this.destOrVen = "Venue";
    
      this.repository.getData('getall/'+this.eventId)
      .subscribe(res => {
        this.event = res ;
        var myObjStr = JSON.stringify(res);
     
       console.log(this.event.destination);
       console.log(this.event.startDate);
       var year = this.event.startDate.split('-')[0];
       var month = this.event.startDate.split('-')[1];
       var day = this.event.startDate.split('-')[2].split('T')[0];
       var date = `${year}-${month}-${day}`
       this.event.startDate=date;
       var type = this.event.pKey.split('-')[1];
       console.log(type);
       console.log(this.event.url);
       
       if (type == "Trip")
          this.destOrVen = "Destination";
          this.image = "https://www.visitportugal.com/sites/www.visitportugal.com/files/mediateca/23_660x371.jpg";

       if (type == "BloodDonation")
          this.image = "https://img.timesnownews.com/story/1528893550-blood.PNG?d=600x450";

       if (type == "YearEndParty")
          this.image = "https://media.urbanistnetwork.com/saigoneer/article-images/legacy/Vm1pSRPb.jpg";
       //eventFormValue.startDate.split('-')[0]
       console.log(date);
       console.log(this.destOrVen);
        
      },
      (error) => {
      //  this.handleErrors(error);n
      })
   

  }

  register(){
  
    ///this.router.navigate(['/profile/list',gonextId])
    this.router.navigate([this.event.url]);
  }

}
