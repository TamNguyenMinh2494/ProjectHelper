import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // private userAuth: any;
  islogged = false;

  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router
  ) {
    this.angularFireAuth.authState.subscribe(userResponse => {
      if (userResponse) {
        // this.userAuth = userResponse;
        this.islogged = true;
        localStorage.setItem('user', JSON.stringify(userResponse));
      } else {
        localStorage.setItem('user', null);
        this.islogged = false;
      }
    });
  }

  async loginWithGoogle() {
    return await this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  isUserLoggedin() {
    return JSON.parse(localStorage.getItem('user'));
    // JSON.parse(localStorage.getItem('displayName'));
    // JSON.parse(localStorage.getItem('photoURL'));
  }
}
