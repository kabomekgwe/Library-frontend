import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tokenNotExpired } from 'angular2-jwt';
import { AuthHttp, AuthConfig, JwtHelper } from 'angular2-jwt';
import { tokenName } from '@angular/compiler';
@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient) { }
  url = environment.domain;
  authToken;
  user;
  options;
  jwtHelper: JwtHelper = new JwtHelper();
  createAuthenticationHeaders() {
    this.loadToken();
   const  httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authToken
      })
    };
  }

  loadToken() {
    this.authToken = localStorage.getItem('id');
  }

  login(user) {
   return  this.httpClient.post(`${this.url}/user/login`, user );
  }

  register(user) {
    return this.httpClient.post(`${this.url}/user/register`, user);
  }

  logout() {
    this.authToken = null;
    this.user = null;
    localStorage.clear();
  }

  storeUserData(id, user) {
    localStorage.setItem('token', id);
    localStorage.setItem('user', user);
    this.authToken = id;
    this.user = user;
  }
  private decodeToken() {
    if(this.authToken) {

    }
  }

  loggedIn() {
    if(localStorage.getItem('token')) {
      return true;
    }
    return false;
  }
}
