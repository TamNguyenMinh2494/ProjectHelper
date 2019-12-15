import { Injectable } from '@angular/core';

import { Router } from '@angular/router';
import { auth } from 'firebase/app';
import { User } from '../model/user';
import { AngularFireAuth } from '@angular/fire/auth';
import { stringify } from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user: User;
  private userDetails: any;
  constructor(
    public angularFireAuth: AngularFireAuth,
    public router: Router
  ) {
    // khi user đăng nhập thì dữ liệu trả về được hứng vào userDetails rồi set userDetails vào bên dưới
    this.angularFireAuth.user.subscribe(usr => {
      if (usr != null) {
        this.userDetails = usr;
        this.setUser();
      }
    });
  }
  // gán chi tiết về user vào các thuộc tính tương ứng
  private setUser() {
    this.user = {
      ...this.userDetails
    };
  }
  async loginWithGoogle() {
    await this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.userDetails = this.angularFireAuth.auth.currentUser; // kiểm tra xem user nãy subscribe có phải là nó hong
    this.setUser();
    location.href = '/';
  }

  async logout() {
    await this.angularFireAuth.auth.signOut().then(() => {
      this.userDetails = null;
      this.user = null;
    });
    this.router.navigate(['']);
  }

  async signup(email: string, password: string) {
    await this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  async login(email: string, password: string) {
    return await this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }
}
