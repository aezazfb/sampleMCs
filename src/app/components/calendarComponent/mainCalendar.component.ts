import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit, Renderer2 } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-mainCalendar',
  standalone: true,
  imports: [CommonModule,  FullCalendarModule],
  templateUrl: './mainCalendar.component.html',
  styleUrl: './mainCalendar.component.scss'
})
export class MainCalendarComponent implements AfterViewInit {

  constructor(private renderer: Renderer2){}

  //text-sm font-semibold text-gray-700

  ngOnInit(): void {
    // this.renderer.addClass(document.getElementById(''))
    // const headerElement = document.getElementById('fc-dom-1');
    // if (headerElement) {
    //   this.renderer.addClass(headerElement, 'text-indigo-500');
    // }
  }
  ngAfterViewInit(): void {
    const headerElement = document.getElementById('fc-dom-1');
    if (headerElement) {
      this.renderer.addClass(headerElement, 'text-indigo-500');
      this.renderer.setStyle(headerElement, 'font-size', '32px');
      this.renderer.setStyle(headerElement, 'font-weight', 'bold')
    }
  }
  
  dateClickFunction(params){
    alert("Date clicked " + params.dateStr)
  };

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    dateClick: (arg) => this.dateClickFunction(arg),
    events: [
      {title: '1st Event', date:'2024-11-22'},
      {title: '2st Event', date:'2024-11-23'},
    ]
  };
}
