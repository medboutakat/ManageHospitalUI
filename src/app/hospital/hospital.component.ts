import { Component, OnInit, Injectable } from '@angular/core';
import { AppointementService } from '../services/appointement.service';
import { Appointementstatus } from '../models/appointementstatus';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { ROOT_URL } from '../models/config';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import { ApointmentStatutService } from '../services/appointmetstatus.service';
import { Observable } from 'rxjs';
import { HospitalService } from '../services/hospital.service';
import { Hospital } from '../models/hospital';
import { HospitalCategoryService } from '../services/hospitalCategory.service';
import { HospitalCategory } from '../models/HospitalCategory';
import { ContactModel } from '../models/Contact';
import { ContactService } from '../services/contact.service';
import { City } from '../models/city';
import { CityService } from '../services/city.service';
import * as uuid from 'uuid';



@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.css']
})
export class HospitalComponent implements OnInit {

myForm = new FormGroup({
  name : new FormControl(''),
  countryHealthId : new FormControl(''),
  remark:new FormControl(''),
  hospitalCategoryId : new FormControl(''),
  contactId : new FormControl(''), 
  ///
})



  name: string;

  constructor(
    private service:HospitalService,
    private serviceCity:CityService,
    private serviceCate:HospitalCategoryService,
    private servicecontact:ContactService,
    private http:HttpClient
    ) { }

  ngOnInit() {
  }
  columnDefs = [
    {headerName: 'id', field: 'id',checkboxSelection: true },
    {headerName: 'name', field: 'name',sortable:true,filter:true },
    {headerName: 'countryHealthId', field: 'countryHealthId' },
    {headerName: 'remark', field: 'remark'},
    {headerName: 'hospitalCategoryId', field: 'hospitalCategoryId' },
    {headerName: 'contactId', field: 'contactId' }
];
 /*********************Variable ag-grid***************************** */
 private api: GridApi;
 private columnApi: ColumnApi;
 private rowSelection;
 /******************Fill ag grid ******************************** */
 onGridReady(params): void {
   this.api = params.api;
   this.columnApi = params.columnApi;
   this.api.sizeColumnsToFit();
   this.loadData();
 }

 listo:Hospital[];
 cats:HospitalCategory[];
 contacts:ContactModel[];
 city:City[];

loadData(){
this.service.gethopital().subscribe((tmp)=>{
  this.listo=tmp;
})

/************     remplir 1- drop down par city   ********* */
this.serviceCity.getCity().subscribe((tmp)=>{
  this.city=tmp;
})

/************     remplir 2- drop down par categorie   ********* */
this.serviceCate.getHospitalCategorie().subscribe((tmp)=>{
  this.cats=tmp;
})

/************     remplir 3- drop down par contact   ********* */
this.servicecontact.getContact().subscribe((tmp)=>{
this.contacts=tmp;
})

}

 /********************Post  ********************************* */
 addappointement() {
  var hospital = this.myForm.value as Hospital

      console.log('form hospital : ',hospital)
      this.service.posthospital(hospital).subscribe(resault=>{
      console.log('res hopital: ',resault)
      this.loadData()
      })
}
/******************selection******************************* */
    tes:string;
    StObjet:Hospital;
    onSelectionChanged(event) {
      if (this.api.getSelectedRows().length == 0) {
        this.StObjet=null;

      } else {
        this.StObjet=this.api.getSelectedRows()[0] as Hospital;
      }

    }

/*********************************Delete ************************************** */

delete(id){
  this.service.delete(id).subscribe(res=>{
    this.loadData();
    alert('suppression bien fait');
  })
}
/*********************************update*********************** */

Editappoinment(){
  console.log("form",this.myForm.value);
  var hospital = this.myForm.value as Hospital
  console.log("hospital : ",hospital);

  this.service.Editappoinment(hospital).subscribe(res => {
    this.loadData()
    alert("product category modified successfully");
  });

}
/*****************************remlir input ***************** */

remplir(){
  this.myForm.setValue(
    {
      id :this.StObjet.id ,
      name:this.StObjet.name,
      countryHealthId:this.StObjet.countryHealthId,
      remark:this.StObjet.remark,
      hospitalCategoryId:this.StObjet.hospitalCategoryId
  });
}

}




