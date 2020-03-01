import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ROOT_URL } from '../models/config';
import { Hospital } from '../models/hospital';
import { ContactModel } from '../models/Contact';

import * as uuid from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {

  url = ROOT_URL;
  id: any;
  name: any;
  countryHealthId: any;
  remark: any;
  hospitalCategoryId: any;
  contactId: any;
  constructor(private http:HttpClient) { }

  //Get
  gethopital(){
    return this.http.get<Hospital[]>(this.url+"Hospital");
  }



//Post Appointment statut
  posthospital(hospital:Hospital){


    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      // id:uuid.v4(),
      name: hospital.name,
      countryHealthId: hospital.countryHealthId,
      remark: hospital.remark,
      // hospitalCategoryId: uuid.v4(),
      hospitalCategoryId: hospital.hospitalCategoryId,
      // contactId:Contact.id,
      identityNo:hospital.identityNo,
      contactModel:hospital.contactModel
    }
    return this.http.post<HospitalService>(this.url+"Hospital", body, { headers })
  }
  /********************delete *****************/
  delete(id){
    return this.http.delete(this.url+'Hospital/'+id);
  }

/********************* Edit *******************/
Editappoinment(hospital:Hospital) {
   console.log("pro id : ",hospital.id);
  const params = new HttpParams().set('id',hospital.id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = { id : hospital.id,
  name: hospital.name, remark: hospital.remark,countryHealthId:hospital.countryHealthId,hospitalCategoryId:hospital.hospitalCategoryId
}
console.log("abdo id : ",hospital.id);

  return this.http.put<HospitalService>(this.url+'Hospital/' + hospital.id, body, {headers,params})
}

}

