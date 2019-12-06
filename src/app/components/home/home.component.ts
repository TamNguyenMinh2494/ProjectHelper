import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { CreateAProjectService } from '../../services/create-aproject.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UpdateConfirmDialogComponent } from '../update-confirm-dialog/update-confirm-dialog.component';
import { Requirement } from 'src/app/model/requirement';
import { DeleteConfirmDialogComponent } from '../delete-confirm-dialog/delete-confirm-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  requirements: any;
  displayedColumns: string[] = ['Title', 'Type', 'Price', 'Description', 'Actions'];
  dataSource: MatTableDataSource<Requirement>;
  // static = false khi sử dụng ngIf hoặc ngFor, ngược lại static = true khi là tĩnh
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private requirementService: CreateAProjectService,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.requirementService.getAllRequirements().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      setTimeout(() => {
        console.log(this.sort);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }, 200);
    });


  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  checkBox = ['All', 'Website', 'Application', 'Design', 'Video', 'Marketing'];


  onUpdate(element: Requirement) {
    const dialogRef = this.dialog.open(UpdateConfirmDialogComponent, { width: '500px', data: element });
    dialogRef.afterClosed().subscribe((data) => {
      this.requirementService.updateRequirement(data, (res) => {
        alert(res.status);
      });
    });
  }
  onDelete(requirement: Requirement) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, { width: '300px', data: requirement });
    dialogRef.afterClosed().subscribe((data) => {
      this.requirementService.deleteRequirement(data, (res) => {
        alert(res.status);
      });
    });
  }
}
