import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-aproject',
  templateUrl: './create-aproject.component.html',
  styleUrls: ['./create-aproject.component.scss']
})
export class CreateAProjectComponent implements OnInit {


  jobsTitle = ['Website', 'Application', 'Design', 'Video', 'Marketing'];

  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number) {
    if (value < 1000000) {
      return Math.round(value / 1000) + 'k';
    } else {
      return Math.round(value / 1000000) + 'm';
    }
    return value;
  }
  // tslint:disable-next-line: member-ordering
  max = 10000000;
  // tslint:disable-next-line: member-ordering
  min = 100000;
  // tslint:disable-next-line: member-ordering
  step = 20000;
  // tslint:disable-next-line: member-ordering
  thumbLabel = false;

  value = null;

}
