import { Component, OnInit, Injectable } from '@angular/core';
import { GridApi, ColumnApi } from 'ag-grid-community';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';
import * as uuid from 'uuid';
import { DoctorCategoryService } from '../services/doctorCategory.service';
import { DoctorCategory } from '../models/DoctorCategory';



@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-doctorCat',
  templateUrl: './doctorCat.component.html',
  styleUrls: ['./doctorCat.component.css']
})
export class DoctorCatComponent implements OnInit {
 
 
myForm = new FormGroup({
  id : new FormControl(''),
  name : new FormControl(''),
  remark:new FormControl('')
});

  constructor(  private serviceCate:DoctorCategoryService) { }

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
 
 cats:DoctorCategory[]; 

loadData(){
this.serviceCate.getAll().subscribe((tmp)=>{
  this.cats=tmp;
})
 

}

 /********************Post  ********************************* */
 addappointement() {
  var doctorCat = this.myForm.value as DoctorCategory
      console.log('form doctor : ',doctorCat)
      this.serviceCate.add(doctorCat).subscribe(resault=>{
      console.log('res doctor: ',resault)
      this.loadData()
      })
}
 

/*********************************Delete ************************************** */

delete(id){
  this.serviceCate.delete(id).subscribe(res=>{
    this.loadData();
    alert('suppression bien fait');
  })
}
/*********************************update*********************** */

Editappoinment(){
  console.log("form",this.myForm.value);
  var doctorCat = this.myForm.value as DoctorCategory
  console.log("hospital : ",doctorCat);

  this.serviceCate.update(doctorCat).subscribe(res => {
    this.loadData()
    alert("product category modified successfully");
  });

}


/******************selection******************************* */
 
 StObjet:DoctorCategory;
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
/*****************************remlir input ***************** */

 
remplir(){
  if(this.StObjet!=null){
 this.serviceCate.getById(this.StObjet.id).subscribe(res => {   
    this.myForm.setValue(
      {
        id :res.id ,
        name:res.name,
        remark:res.remark, 
      }); 
  });
  } 
}
}




