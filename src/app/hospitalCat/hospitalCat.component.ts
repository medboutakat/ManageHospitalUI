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
  selector: 'app-hospitalCat',
  templateUrl: './hospitalCat.component.html',
  styleUrls: ['./hospitalCat.component.css']
})
export class HospitalCatComponent implements OnInit {
url="http://144.91.76.98:5002/api/Hospital";
urlcontact="http://144.91.76.98:5002/api/Contact";




myForm = new FormGroup({
  name : new FormControl(''),
  id : new FormControl(''),
  remark:new FormControl('')
})
  name: string;

  constructor(  
    private serviceCate:HospitalCategoryService,
    private http:HttpClient
    ) { }

  ngOnInit() {
  }
  columnDefs = [
    // {headerName: 'id', field: 'id',checkboxSelection: true },
    {headerName: 'name', field: 'name',sortable:true,checkboxSelection: true ,filter:true }, 
    {headerName: 'remark', field: 'remark'}, 
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
 
 cats:HospitalCategory[];
 contacts:ContactModel[];
 city:City[];

loadData(){
this.serviceCate.getHospitalCategorie().subscribe((tmp)=>{
  this.cats=tmp;
})

  

}

 /********************Post  ********************************* */
 addappointement() {
  var hospital = this.myForm.value as HospitalCategory

      console.log('form hospital : ',hospital)
      this.serviceCate.addHospitalCategorie(hospital).subscribe(resault=>{
      console.log('res hopital: ',resault)
      this.loadData()
      })
}
/******************selection******************************* */
tes:string;
    StObjet:HospitalService[];
    onSelectionChanged(event) {
      if (this.api.getSelectedRows().length == 0) {


      } else {
        this.StObjet=this.api.getSelectedRows();
      }

    }

/*********************************Delete ************************************** */

delete(id){
  this.serviceCate.deleteHospitalCategorie(id).subscribe(res=>{
    this.loadData();
    alert('suppression bien fait');
  })
}
/*********************************update*********************** */

Editappoinment(){
  console.log("form",this.myForm.value);
  var hospital = this.myForm.value as HospitalCategory
  console.log("hospital : ",hospital);

  this.serviceCate.updateHospitalCategorie(hospital).subscribe(res => {
    this.loadData()
    alert("product category modified successfully");
  });

}
/*****************************remlir input ***************** */

remplir(){
  this.myForm.setValue(
    {
      id :this.StObjet[0].id ,
      name:this.StObjet[0].name,
      remark:this.StObjet[0].remark
    });
}

}




