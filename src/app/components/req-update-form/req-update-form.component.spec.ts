import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReqUpdateFormComponent } from './req-update-form.component';

describe('ReqUpdateFormComponent', () => {
  let component: ReqUpdateFormComponent;
  let fixture: ComponentFixture<ReqUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReqUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReqUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
