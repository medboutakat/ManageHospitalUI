// import { subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../models/user';
import { ROOT_URL } from '../models/config';

@Injectable()
export class userservice
{
  constructor(private http: HttpClient) { }

  AddUser(user: User) {
    const headers = new HttpHeaders().set('content-type', 'application/json');

    var body = {
      id: user.id , firstName: user.firstname, lastName: user.lastname,
    }

    console.log(ROOT_URL);
    return this.http.post<User>(ROOT_URL + 'Patient/', body, { headers })
  }
}




