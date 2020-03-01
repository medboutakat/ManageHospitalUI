import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Appointementstatus } from '../models/appointementstatus';
import { ROOT_URL } from '../models/config';
import { HospitalService } from './hospital.service';
import { Appointement } from '../models/appointement';
import { Doctor } from '../models/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  url = ROOT_URL;
  constructor(private http:HttpClient) { }

  get(){
    return this.http.get<Doctor[]>(this.url+"Doctor");
  }
  getById(id:string){
    return this.http.get<Doctor>(this.url+"Doctor/"+id);
  }
  add(doctor:Doctor){
    const headers = new HttpHeaders().set('content-type', 'application/json');
        var body = {
          id:doctor.id,
          firstName:doctor.firstName,
          lastName:doctor.lastName,
          contactId:doctor.contactId,
          sexe:doctor.sexe
        }
        return this.http.post<Doctor>(this.url+"Doctor", body, { headers })
  }


    /********************delete *****************/
    delete(id){
      return this.http.delete(this.url+'Doctor/'+id);
    }
  
    
  /********************* Edit *******************/
  Edit(doctor:Doctor) {
     console.log("pro id : ",doctor.id);
    const params = new HttpParams().set('id',doctor.id);
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = { id : doctor.id,
      
      firstName:doctor.firstName,
      lastName:doctor.lastName,
      contactId:doctor.contactId,
      sexe:doctor.sexe
  }
  console.log("abdo id : ",doctor.id);
  
    return this.http.put<Doctor>(this.url+'Doctor/' + doctor.id, body, {headers,params})
  }
  
}

