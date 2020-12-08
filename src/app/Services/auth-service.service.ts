import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

  public username: String;
  public password: String;

  user:any;
  authenticated = false;

  constructor(private http: HttpClient) { }

  authenticationService(username: String, password: String) {
    return this.http.get(`http://localhost:8080/api/listUser`,
      { headers: { Authorization: this.createBasicAuthToken(username, password) } }).pipe(map((res) => {
      this.username = username;
      this.password = password;
      let basicAuthToken =  this.createBasicAuthToken(username, password)
      this.registerSuccessfulLogin(basicAuthToken);
    }));
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(basicAuthToken) {
    sessionStorage.setItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME, basicAuthToken)

  }

  logout() {
    sessionStorage.removeItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME);
    this.username = null;
    this.password = null;
  }

  isUserLoggedIn() {
    this.user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (this.user === null) return false
    return true
  }

  getLoggedInUserName() {
    let user = sessionStorage.getItem(this.USER_NAME_SESSION_ATTRIBUTE_NAME)
    if (user === null) return ''
    return user
  }


    getUserConnect(): Observable<any>{
      const url = 'http://localhost:8080/api/getLogeUser';

    return this.http.get<any>(url);

  }
}

