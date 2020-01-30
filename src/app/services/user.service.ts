// import { subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Users } from '../models/Users';
import { ROOT_URL } from '../models/config';

@Injectable()
export class userservice
{
  constructor(private http: HttpClient) { }

  AddUser(user: Users) {
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
    return this.http.post<Users>(ROOT_URL + 'Users', body, { headers })
  }
}




