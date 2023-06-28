import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  user: any;
  error: any;

  constructor(public auth: AngularFireAuth) {}

  async loginByEmail(email: string, password: string) {
    try {
      const credential = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      this.user = credential.user;
      console.log(this.user);
      if(credential){
        window.sessionStorage.setItem('token', this.user);
      }
    } catch (error) {
      this.error = error;
    }
  }

  async googleSingnin() {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.auth.signInWithPopup(provider);
      this.user = credential.user;
      window.sessionStorage.setItem('token', this.user);
    } catch (error) {
      this.error = error;
    }
  }

  async signOut() {
    await this.auth.signOut();
    this.user = null;
  }

  isUserLoggedIn() {
    const token = this.getAuthorizationToken();

    if (!token) {
      return false;
    } else if (this.isTokenExpired(token)) {
      return false;
    }
    return true;
  }

  getAuthorizationToken() {
    const token = window.sessionStorage.getItem('token');
    return token;
  }

  isTokenExpired(token?: string): boolean {
    if (token === undefined) {
      return true;
    }
    return false;
  }
}
