import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Appointementstatus } from '../models/appointementstatus';
import { ROOT_URL } from '../models/config';
import { HospitalService } from './hospital.service';
import { Appointement } from '../models/appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {
  url = ROOT_URL;
  constructor(private http:HttpClient) { }

  getappointemenet(){
    return this.http.get<Appointementstatus[]>(this.url+"AppointementStatus");
  }

  addrendervous(appointement:Appointement){
    const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
          identityNo:appointement.identityNo,
          assurance:appointement.assurance,
          callTimeStamp:appointement.callTimeStamp,
          reservationTimeStamp:appointement.reservationTimeStamp,
          subject:appointement.subject,
          statusId:appointement.statusId,
          patienceId:appointement.patienceId,
          assutanceId:appointement.assutanceId,

        }
        return this.http.post<AppointementService>(this.url+"Appointement", body, { headers })
  }
}

