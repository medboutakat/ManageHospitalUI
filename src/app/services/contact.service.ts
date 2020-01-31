
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { ROOT_URL } from '../models/config';
import { ContactModel } from '../models/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  url = ROOT_URL;
  constructor(private http:HttpClient) { }
//Get
getContact(){
    return this.http.get<ContactModel[]>(this.url+"Contact");
  }


//Post contact
  addContact(contact:ContactModel){
    const headers = new HttpHeaders().set('content-type', 'application/json');
    var body = {
      id: contact.id,
      email: contact.email,
      phone1: contact.phone1,
      phone2: contact.phone2,
      whatsApp: contact.whatsApp,
      fax: contact.fax,
      city: contact.city,
      adress1: contact.adress1,
      adress2: contact.adress2,
      other: contact.other
    }
    return this.http.post<ContactModel>(this.url+"Contact", body, { headers })
  }
  /********************delete contact*****************/
  deleteContact(id){
    return this.http.delete(this.url+'Contact/'+id);
  }

/****************** ***Edit *******************/
updateContact(contact:ContactModel) {
  // console.log("pro id : ",appointement.id);
  const params = new HttpParams().set('id',contact.id+"");
  const headers = new HttpHeaders().set('content-type', 'application/json');
  var body = {
    id: contact.id,
    email: contact.email,
    phone1: contact.phone1,
    phone2: contact.phone2,
    whatsApp: contact.whatsApp,
    fax: contact.fax,
    city: contact.city,
    adress1: contact.adress1,
    adress2: contact.adress2,
    other: contact.other
}
  return this.http.put<ContactModel>(this.url+'Contact/' + contact.id, body, {headers,params})
}

}

