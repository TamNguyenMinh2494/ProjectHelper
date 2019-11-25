import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CreateAProjectService } from '../../services/create-aproject.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  requirements: any;
  displayedColumns: string[] = ['Title', 'Type', 'Price', 'Description', 'Actions'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private requirementService: CreateAProjectService) { }

  ngOnInit() {
    this.requirementService.getAllRequirements().subscribe(res => this.dataSource = new MatTableDataSource(res));
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  checkBox = ['All', 'Website', 'Application', 'Design', 'Video', 'Marketing'];

  onUpdate(element) {
    this.requirementService.selected = element;
  }
  onDelete(key: string) {
    this.requirementService.deleteRequirement(key);
  }
}
