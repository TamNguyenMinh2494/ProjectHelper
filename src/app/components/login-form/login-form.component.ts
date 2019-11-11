import { Component, OnInit, Input } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  hide = true;
  selectedVal: string;
  responseMessage = '';
  responseMessageType = '';
  // userDetails: any;

  formGroup = new FormGroup(
    {
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl('', [
        Validators.required,
      ])
    });
  constructor(
    public userDetails: AuthenticationService,
    private router: Router,
    private authService: AuthenticationService
  ) {
    this.selectedVal = 'login';
  }

  ngOnInit() {
  }
  get email() { return this.formGroup.get('email'); }
  get password() { return this.formGroup.get('password'); }

  // // Login with Google account

  // googleLogin() {
  //   this.authService.loginWithGoogle()
  //     .then(res => {
  //       console.log(res);
  //       this.showMessage('Success', 'Successfully logged in with Google');
  //       this.router.navigate(['home']);
  //     }, err => {
  //       this.showMessage('Danger', err.message);
  //     });
  // }

  // // show warning when success or fail to login
  // showMessage(type, msg) {
  //   this.responseMessageType = type;
  //   this.responseMessage = msg;
  //   setTimeout(() => {
  //     this.responseMessage = '';
  //   }, 2000); // stop 2s to view message
  // }




}
