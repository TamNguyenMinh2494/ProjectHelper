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
    private router: Router,
    private authService: AngularFireAuth,
  ) {
    this.selectedVal = 'login';
    authService.user.subscribe(usr => this.userDetails = usr);
  }

  ngOnInit() {
  }
  titleClick() {
    this.router.navigate(['home']);
  }

  signinClick() {
    this.router.navigate(['/signin']);
  }
  signupClick() {
    this.router.navigate(['/signup']);
  }

  createAProjectClick() {
    this.router.navigate(['/createAProject']);
  }

  googleLogout() {
    this.userAuth.logout();
  }

}
