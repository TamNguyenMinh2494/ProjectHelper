import { Component, OnInit, Inject } from '@angular/core';
import { CreateAProjectService } from '../../services/create-aproject.service';
import { from } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-req-update-form',
  templateUrl: './req-update-form.component.html',
  styleUrls: ['./req-update-form.component.scss']
})
export class ReqUpdateFormComponent implements OnInit {

  constructor(
    public requirementService: CreateAProjectService,
    private router: Router) { }


  ngOnInit() {
  }

  onSave() {
    if (this.requirementService.selected.key == null) {
      this.router.navigate(['createAProject']);
    } else {
      this.requirementService.updateRequirement(this.requirementService.selected);
    }
  }

}
