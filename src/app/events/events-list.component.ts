import { Component,OnInit } from "@angular/core";
import { EventService } from "./shared/event.service";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector:'events-list',
    templateUrl : './events-list.component.html',
   
})

export class  EventsListComponent implements OnInit{
  events:any;

  //Constructor Denpendency injecting
  constructor(private eventService:EventService,private route:ActivatedRoute){
  }

    //life cycle hook of a compoent
    //second life cycle hook
    // write all the initializataion code in this life cycle method
    ngOnInit(){
       // this.eventService.getEvents().subscribe(events => { this.events = events });

       this.events = this.route.snapshot.data['events']
    }

        
}


