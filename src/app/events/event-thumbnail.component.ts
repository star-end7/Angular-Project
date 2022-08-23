import { Component, EventEmitter, Input, Output } from "@angular/core";
@Component({
    selector:'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles:[`
    .green {color: Yellow !important }
    .thumbnail {min-height : 210px;}
    .bold { font-weight : bold; }
.pad-left{margin-left:10px;}
.well div{color: skyblue;}
    `]
})
export class EventThumbnailComponent{
    @Input() event:any
    @Output() eventClicked=new EventEmitter(); // to pass data from parent to child
    address:string = "roadnumber3 sharadanagr gadiannaram"
    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return{green:isEarlyStart,bold:isEarlyStart}
    }
    getStartTimeClass2(){
        if(this.event && this.event.time === '8:00 am')
        return 'green bold'
        else
        return ''
    }
    getStartTimeClass3(){
        if(this.event && this.event.time === '8:00 am')
        return ['green', 'bold']
        else
        return []
    }
    getStartTimeStyle():any {
        if (this.event && this.event.time === '9:00 am')
          return {color: 'blue', 'font-weight': 'bold'}
        return {}
      }

   

   

   



}