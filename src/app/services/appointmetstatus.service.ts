import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Appointementstatus } from '../models/appointementstatus';

@Injectable({
  providedIn: 'root'
})

export class ApointmentStatutService {
  url="http://144.91.76.98:5002/api/";
  constructor(private http:HttpClient) { }

  //Get
  getappointemenet(){
    return this.http.get<Appointementstatus[]>(this.url+"AppointementStatus");
  }

//Post Appointment statut
  postAppointmentStatut(appointement:Appointementstatus){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name: appointement.name, remark: appointement.remark
    }
    return this.http.post<Appointementstatus>(this.url+"AppointementStatus", body, { headers })
  }
  /********************delete *****************/
  delete(id){
    return this.http.delete(this.url+'AppointementStatus/'+id);
  }

/****************** ***Edit *******************/
Editappoinment(appointement:Appointementstatus) {
  // console.log("pro id : ",appointement.id);
  const params = new HttpParams().set('id',appointement.id);
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    name: appointement.name, remark: appointement.remark,id:appointement.id
  }
  return this.http.put<Appointementstatus>(this.url+'AppointementStatus/' + appointement.id, body, {headers,params})
}

}
