import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  myDate: any;
  formatDate: string;
  constructor() { }

  ngOnInit(): void {
  }

  printcal() {
    this.myDate = document.querySelector("#inputCal");
    let DateTemp = this.myDate.value.split("/");
    this.formatDate = DateTemp[2] + "-" + DateTemp[0] + "-" + DateTemp[1];
    console.log(this.formatDate);
  }
}
