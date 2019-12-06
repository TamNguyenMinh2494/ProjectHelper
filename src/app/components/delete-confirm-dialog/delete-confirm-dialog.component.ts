import { Component, OnInit, Inject } from '@angular/core';
import { CreateAProjectService } from 'src/app/services/create-aproject.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Requirement } from 'src/app/model/requirement';

@Component({
  selector: 'app-delete-confirm-dialog',
  templateUrl: './delete-confirm-dialog.component.html',
  styleUrls: ['./delete-confirm-dialog.component.scss']
})
export class DeleteConfirmDialogComponent implements OnInit {

  constructor(
    public requirementService: CreateAProjectService,
    private dialogRef: MatDialogRef<DeleteConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Requirement
  ) { }

  ngOnInit() {
  }
  onDelete() {
    this.dialogRef.close(this.data);
  }
}
