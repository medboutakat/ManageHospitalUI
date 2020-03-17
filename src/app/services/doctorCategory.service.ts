import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ROOT_URL } from '../models/config';
import { HospitalCategory } from '../models/HospitalCategory';
import { DoctorCategory } from '../models/DoctorCategory';

@Injectable({
  providedIn: 'root'
})
export class DoctorCategoryService {
 


  url = ROOT_URL;
  constructor(private http:HttpClient) { }
//Get
  getAll(){
    return this.http.get<DoctorCategory[]>(this.url+"DoctorCategory");
  }
// Get One by Id
  getById(id:number){
    return this.http.get<DoctorCategory>(this.url+"DDoctorCategoryoctor/"+id);
  }

  // this.myForm.setValue({id :this.StObjet[0].id ,cite:this.StObjet[0].cite,name:this.StObjet[0].name,remark:this.StObjet[0].remark});



//Post Appointment statut
  add(obj:DoctorCategory){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name: obj.name,
      remark: obj.remark
    }
    return this.http.post<DoctorCategory>(this.url+"DoctorCategory", body, { headers })
  }
  /********************delete *****************/
  delete(id){
    return this.http.delete(this.url+'DoctorCategory/'+id);
  }

/****************** ***Edit *******************/
update(obj:DoctorCategory) {
  // console.log("pro id : ",appointement.id);
  const params = new HttpParams().set('id',obj.id+"");
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    name: obj.name, remark: obj.remark
  }
  return this.http.put<DoctorCategory>(this.url+'DoctorCategory/' + obj.id, body, {headers,params})
}

}

