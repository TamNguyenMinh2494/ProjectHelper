import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../../services/authentication.service";
import { from } from "rxjs";
import { Router } from "@angular/router";
@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  hide = true;
  emailInput: string;
  passwordInput: string;
  constructor(
    private authService: AuthenticationService,
    public userDetails: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  signup() {
    if (this.emailInput != null && this.passwordInput != null) {
      this.authService.signup(this.emailInput, this.passwordInput).then(
        (res) => {
          location.href = "/";
        },
        (err) => {
          alert(err);
        }
      );
    }
  }
}
