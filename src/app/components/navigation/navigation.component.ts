import { Component, OnInit } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  selectedVal: string;
  responseMessage = '';
  responseMessageType = '';
  userDetails = null;

  constructor(
    public userAuth: AuthenticationService,
    private route: Router,
    private authService: AngularFireAuth,
  ) {
    this.selectedVal = 'login';
    authService.user.subscribe(usr => this.userDetails = usr);
  }

  ngOnInit() {
  }

  signinClick() {
    this.route.navigate(['/signin']);
  }
  signupClick() {
    this.route.navigate(['/signup']);
  }

  createAProjectClick() {
    this.route.navigate(['/createAProject']);
  }

  googleLogout() {
    this.userAuth.logout();
  }

}
