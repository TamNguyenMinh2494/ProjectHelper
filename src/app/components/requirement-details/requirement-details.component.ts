import { Component, OnInit, Input } from '@angular/core';
import { Requirement } from 'src/app/model/requirement';

@Component({
  selector: 'app-requirement-details',
  templateUrl: './requirement-details.component.html',
  styleUrls: ['./requirement-details.component.scss']
})
export class RequirementDetailsComponent implements OnInit {

  @Input() requirement: Requirement;
  constructor() { }

  ngOnInit() {
  }

}
