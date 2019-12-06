import { Component, OnInit, Inject } from '@angular/core';
import { CreateAProjectService } from '../../services/create-aproject.service';
import { from } from 'rxjs';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Requirement } from '../../model/requirement';
@Component({
  selector: 'app-update-confirm-dialog',
  templateUrl: './update-confirm-dialog.component.html',
  styleUrls: ['./update-confirm-dialog.component.scss']
})
export class UpdateConfirmDialogComponent implements OnInit {

  constructor(
    public requirementService: CreateAProjectService,
    private router: Router,
    private dialogRef: MatDialogRef<UpdateConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Requirement
  ) { }

  ngOnInit() {
  }
  onSave() {
    this.dialogRef.close(this.data);
  }
}
