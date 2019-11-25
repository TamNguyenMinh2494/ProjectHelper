import { Component, OnInit, Input } from '@angular/core';
import { CreateAProjectService } from '../../services/create-aproject.service';
import { map } from 'rxjs/operators';
import { Requirement } from '../../model/requirement';
import { MatTableDataSource } from '@angular/material/table';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  requirements: any;

  constructor(private requirementService: CreateAProjectService) { }

  ngOnInit() {
    this.requirementService.getAllRequirements().subscribe(res => this.dataSource = new MatTableDataSource(res));
  }

  displayedColumns: string[] = ['Title', 'Type', 'Price', 'Description'];

  dataSource = new MatTableDataSource();

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  checkBox = ['All', 'Website', 'Application', 'Design', 'Video', 'Marketing'];



}
