import { Component, OnInit, Input } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.scss"],
})
export class LoginFormComponent implements OnInit {
  hide = true;
  formGroup = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });
  constructor(
    public userDetails: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}
  get email() {
    return this.formGroup.get("email");
  }
  get password() {
    return this.formGroup.get("password");
  }

  async loginUser() {
    await this.userDetails.login(this.email.value, this.password.value).then(
      (res) => {
        location.href = "/";
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
