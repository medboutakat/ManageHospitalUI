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
import { DoctorService } from '../services/doctor.service';
import { Doctor } from '../models/doctor';  
import { DoctorCategory } from '../models/DoctorCategory';
import { DoctorCategoryService } from '../services/doctorCategory.service';


@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit { 

myForm = new FormGroup({
  name : new FormControl(''),
  id : new FormControl(''),
  firstName: new FormControl(''),
  lastName:new FormControl(''),
  sexe:new FormControl(''),
  doctorCategoryId:new FormControl('')
})

  name: string;

  constructor(  
    private serviceDoctor:DoctorService,
    private serviceCate:DoctorCategoryService,
    private http:HttpClient
    ) { }

  ngOnInit() {
 
  this.loadData();
  }
  columnDefs = [ 
    {headerName: 'firstName', field: 'firstName',sortable:true,checkboxSelection: true ,filter:true }, 
    {headerName: 'lastName', field: 'lastName',sortable:true ,filter:true }, 
    {headerName: 'sexe', field: 'sexe'}, 
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
 
 doctors:Doctor[];
 cats:DoctorCategory[];
 contacts:ContactModel[];
 city:City[];

loadData(){
this.serviceCate.getAll().subscribe((tmp)=>{
  this.cats=tmp;
})
this.serviceDoctor.getAll().subscribe((tmp)=>{
  this.doctors=tmp;
})

}

 /********************Post  ********************************* */
 add() {
  var doctor = this.myForm.value as Doctor
      doctor.id=  uuid();
      console.log('form doctor : ',doctor)
      this.serviceDoctor.add(doctor).subscribe(resault=>{
      console.log('res doctor: ',resault)
      this.loadData()
      })
}
/******************selection******************************* */
tes:string;
 StObjet:Doctor;
 onSelectionChanged(event) { 
      if (this.api.getSelectedRows().length == 0) {
      var obj=  this.api.getSelectedRows() 
      this.StObjet=null;
      console.log("obj:",obj)
      } else {
        this.StObjet=this.api.getSelectedRows()[0];
        console.log("ttt:", this.StObjet)
      } 
  }

/*********************************Delete ************************************** */

delete(id){
  this.serviceDoctor.delete(id).subscribe(res=>{
    this.loadData();
    alert('suppression bien fait');
  })
}
/*********************************update*********************** */

Editappoinment(){
  console.log("form",this.myForm.value);
  var doctor = this.myForm.value as Doctor
  console.log("doctor : ",doctor);

  this.serviceDoctor.Edit(doctor).subscribe(res => {
    this.loadData()
    alert("doctor modified successfully");
  });

}
/*****************************remlir input ***************** */

remplir(){
  if(this.StObjet!=null){
 this.serviceDoctor.getById(this.StObjet.id).subscribe(res => {
   
    this.myForm.setValue(
      {
        id :res.id ,
        firstName:res.firstName,
        lastName:res.lastName,
        // contactId:res.contactId,
        sexe:res.sexe
      }); 
  });
  } 
}

}




