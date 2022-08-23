import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarComponent } from './nav/navbar.component';
import { EventService } from './events/shared/event.service';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';
import { EventsListResolver } from './events/events-list-resolver.service';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { SessionListComponent } from './events/event-details/session-list.component';
import { DurationPipe } from './events/shared/duration.pipe';
import { AuthService } from './user/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { EventsResolver } from './events/event-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    NavBarComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    DurationPipe
   
  ],
  imports: [

    CommonModule,
    FormsModule,
   BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  
  providers: [
    EventService,
    EventRouteActivator,
    AuthService,
  
    {
        provide: 'canDeactivateCreateEvent',
        useValue: checkDirtyState

    },EventsListResolver,
    EventsResolver
  
  ],

  bootstrap: [AppComponent]
})


export class AppModule { }



function checkDirtyState(component:CreateEventComponent) {
  if (component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true
}
