import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';
@Component({
  templateUrl: 'create-event.component.html',
  styles: [`
    em { float:right; color:#E05C65; padding-left:10px;}
    .error input {background-color:#E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error ::-moz-placeholder {color: #999; }
    .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateEventComponent {
    name:any;
    price:any;
    time:any;
    date:any;
    address:any;
    city:any;
    country:any;
    imageUrl:any;
    onlineUrl:any;


  isDirty = true
  constructor(private router: Router, private eventService:EventService) {
  }
  saveEvent(formValues:IEvent |any) {
    console.log(formValues)
     this.eventService.saveEvent(formValues).subscribe(() => {
       this.isDirty = false;
       this.router.navigate(['/events'])
      
     })
    }
  cancel() {
    this.router.navigate(['/events'])
  }
}

function cancel() {
        throw new Error('Function not implemented.');
    }
