import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ROOT_URL } from '../models/config';
import { HospitalCategory } from '../models/HospitalCategory';

@Injectable({
  providedIn: 'root'
})
export class HospitalCategoryService {
 


  url = ROOT_URL;
  constructor(private http:HttpClient) { }
//Get
  getHospitalCategorie(){
    return this.http.get<HospitalCategory[]>(this.url+"HospitalCategory");
  }

  // this.myForm.setValue({id :this.StObjet[0].id ,cite:this.StObjet[0].cite,name:this.StObjet[0].name,remark:this.StObjet[0].remark});



//Post Appointment statut
  addHospitalCategorie(obj:HospitalCategory){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      name: obj.name,
      remark: obj.remark
    }
    return this.http.post<HospitalCategory>(this.url+"Hospital", body, { headers })
  }
  /********************delete *****************/
  deleteHospitalCategorie(id){
    return this.http.delete(this.url+'Hospital/'+id);
  }

/****************** ***Edit *******************/
updateHospitalCategorie(obj:HospitalCategory) {
  // console.log("pro id : ",appointement.id);
  const params = new HttpParams().set('id',obj.id+"");
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
  name: obj.name, remark: obj.remark
}
  return this.http.put<HospitalCategory>(this.url+'Hospital/' + obj.id, body, {headers,params})
}

}

