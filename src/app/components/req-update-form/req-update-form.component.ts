import { Component, OnInit, Inject } from '@angular/core';
import { CreateAProjectService } from '../../services/create-aproject.service';
import { from } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Requirement } from '../../model/requirement';
@Component({
  selector: 'app-req-update-form',
  templateUrl: './req-update-form.component.html',
  styleUrls: ['./req-update-form.component.scss']
})
export class ReqUpdateFormComponent implements OnInit {

  constructor(
    public requirementService: CreateAProjectService,
    private router: Router,
    private dialogRef: MatDialogRef<ReqUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Requirement
  ) { }


  ngOnInit() {
  }

  onSave() {
    this.dialogRef.close(this.data);
  }
}
