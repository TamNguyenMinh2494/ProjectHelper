import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CreateAProjectComponent } from "./create-aproject.component";

describe("CreateAProjectComponent", () => {
  let component: CreateAProjectComponent;
  let fixture: ComponentFixture<CreateAProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateAProjectComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
