import { Component, OnInit } from '@angular/core';
import { Requirement } from '../model/requirement';
import { CreateAProjectService } from '../services/create-aproject.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-aproject',
  templateUrl: './create-aproject.component.html',
  styleUrls: ['./create-aproject.component.scss']
})
export class CreateAProjectComponent implements OnInit {

  requirement: Requirement = new Requirement();
  submitted = false;
  value = '';
  Price = ['0 - 1,000,000 VNĐ', '1,000,000 - 5,000,000 VNĐ', '5,000,000 - 10,000,000 VNĐ', '15,000,000 - 20,000,000 VNĐ'];
  jobsTitle = ['Website', 'Application', 'Design', 'Video', 'Marketing'];
  durationInSeconds = 5;
  constructor(
    private requirementService: CreateAProjectService,
    private afAuth: AngularFireAuth,
    private router: Router,
  ) { }

  ngOnInit() {

  }

  newRequirement(): void {
    this.submitted = false;
    this.requirement = new Requirement();
  }

  save() {
    this.requirement.ownerId = this.afAuth.auth.currentUser.uid;
    this.requirementService.createRequirement(this.requirement);
    this.requirement = new Requirement();
  }
  onSubmit() {
    this.submitted = true;
    this.save();
    this.router.navigate(['']);

  }

}
  // formatLabel(price: number) {
  //   if (price < 1000000) {
  //     return Math.round(price / 1000) + 'k';
  //   }
  //   if (price >= 1000000) {
  //     return Math.round(price / 1000000) + 'm';
  //   }
  //   return price;
  // }
  // tslint:disable-next-line: member-ordering
  // max = 10000000;
  // // tslint:disable-next-line: member-ordering
  // min = 100000;
  // // tslint:disable-next-line: member-ordering
  // step = 200000;
  // // tslint:disable-next-line: member-ordering
  // thumbLabel = false;

