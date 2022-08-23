import { Component,OnInit } from "@angular/core";
import { EventService } from './../shared/event.service';
import { ActivatedRoute } from "@angular/router";
@Component({
    selector:'event-details',
    templateUrl: './event-details.component.html'
})
export class EventDetailsComponent implements OnInit{
event:any;
    constructor(private eventService:EventService, private route: ActivatedRoute) {
    }
    ngOnInit() {
    this.event = this.route.snapshot.data['event']
    }
 
}