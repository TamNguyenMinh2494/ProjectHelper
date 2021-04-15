import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-my-paginator",
  templateUrl: "./my-paginator.component.html",
  styleUrls: ["./my-paginator.component.scss"],
})
export class MyPaginatorComponent implements OnInit {
  constructor() {}

  @Input()
  set totalPage(page) {
    this.pages = Array(page).fill(0);
  }

  pages = [];

  @Output()
  selectedPage = new EventEmitter<number>();

  ngOnInit() {}
}
