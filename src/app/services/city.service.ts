import { Injectable } from '@angular/core';
import { City } from '../models/city';
import { ROOT_URL } from '../models/config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http:HttpClient) { }
  url = ROOT_URL;

  id: any;
  name: any;
  remark: any;
  regionModel: any;


//Get
  getCity(){
    return this.http.get<City[]>(this.url+"City");
  }
}
