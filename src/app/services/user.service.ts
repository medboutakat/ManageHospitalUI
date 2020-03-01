// import { subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/Users';
import { ROOT_URL } from '../models/config';
import { Observable } from 'rxjs';

@Injectable()
export class userservice
{
 


  private BASE_URL = 'http://localhost:1337';

  constructor(private http: HttpClient) {}

  getToken(): string {
    return localStorage.getItem('token');
  }

  logIn(email: string, password: string): Observable<any> {
    const url = `${this.BASE_URL}/login`;
    return this.http.post<User>(url, {email, password});
  }

  signUp(user: User): Observable<User> {
    const url = `${this.BASE_URL}/register`;

    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      id: user.id ,
      firstName: user.firstName,
      lastName: user.lastName,
      sexe: user.sexe,
      username: user.username,
      password: user.password,
      token: user.token,
      passwordHash: user.passwordHash,
      passwordSalt: user.passwordSalt,
      roleId: user.roleId,
    }
    return this.http.post<User>(ROOT_URL + 'Users', body, { headers }) 
  }
}




