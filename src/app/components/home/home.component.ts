import { Component, OnInit, Input } from '@angular/core';
import { CreateAProjectService } from '../../services/create-aproject.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  requirements: any;

  constructor(private requirementService: CreateAProjectService) { }

  ngOnInit() {
    this.getRequirementList();
  }

  getRequirementList() {
    this.requirementService.getRequirementList().snapshotChanges().pipe(
      map(changes =>
        changes.map(i =>
          ({ key: i.payload.doc.id, ...i.payload.doc.data() })
        )
      )
    ).subscribe(requirements => {
      this.requirements = requirements;
    });
  }
}
