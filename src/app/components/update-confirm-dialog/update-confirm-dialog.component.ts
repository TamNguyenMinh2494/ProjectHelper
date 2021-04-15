import { Component, OnInit, Inject } from "@angular/core";
import { CreateAProjectService } from "../../services/create-aproject.service";
import { from } from "rxjs";
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { Requirement } from "../../model/requirement";
@Component({
  selector: "app-update-confirm-dialog",
  templateUrl: "./update-confirm-dialog.component.html",
  styleUrls: ["./update-confirm-dialog.component.scss"],
})
export class UpdateConfirmDialogComponent implements OnInit {
  Price = [
    "0 - 1,000,000 VNĐ",
    "1,000,000 - 5,000,000 VNĐ",
    "5,000,000 - 10,000,000 VNĐ",
    "15,000,000 - 20,000,000 VNĐ",
  ];
  jobsTitle = ["Website", "Application", "Design", "Video", "Marketing"];
  constructor(
    public requirementService: CreateAProjectService,
    private router: Router,
    private dialogRef: MatDialogRef<UpdateConfirmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Requirement
  ) {}

  ngOnInit() {}
  onSave() {
    this.dialogRef.close(this.data);
  }
}
