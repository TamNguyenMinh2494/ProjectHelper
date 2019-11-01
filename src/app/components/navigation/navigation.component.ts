import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  selectedVal: string;
  responseMessage = '';
  responseMessageType = '';
  userDetails: any;

  constructor(
    public userAuth: AuthenticationService,
    private route: Router,
    private authService: AuthenticationService
  ) {
    this.selectedVal = 'login';
  }

  ngOnInit() {
  }

  // Login with Google account

  googleLogin() {
    this.authService.loginWithGoogle()
      .then(res => {
        console.log(res);
        this.showMessage('Success', 'Successfully logged in with Google');
        this.isUserLoggedin();
      }, err => {
        this.showMessage('Danger', err.message);
      });
  }
  showMessage(type, msg) {
    this.responseMessageType = type;
    this.responseMessage = msg;
    setTimeout(() => {
      this.responseMessage = '';
    }, 2000);
  }
  isUserLoggedin() {
    this.userDetails = this.authService.isUserLoggedin();
  }
  signinClick() {
    this.route.navigate(['/signin']);
  }
  signupClick() {
    this.route.navigate(['/signup']);
  }

}
