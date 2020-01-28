import { Component, OnInit } from '@angular/core';
import { AppointementService } from '../services/appointement.service';
import { Appointementstatus } from '../models/appointementstatus';
import { HospitalService } from '../services/hospital.service';
import { Appointement } from '../models/appointement';
import { Hospital } from '../models/hospital';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit {
  url="http://144.91.76.98:5002/api/Appointement";
  myForm = new FormGroup({
    id:new FormControl(''),
    identityNo:new FormControl(''),
    assurance:new FormControl(''),
    callTimeStamp:new FormControl(''),
    reservationTimeStamp:new FormControl(''),
    subject:new FormControl(''),
    statusId:new FormControl(''),
    patienceId:new FormControl(''),
    assutanceId:new FormControl(''),
  })

  ID
  varrr(id:string){
    console.log('event : ',id);
    this.ID = id
  }

  nom_cabinet :string;
  nom_doctor:string;
  address:string;
  tmp

  constructor(private appserv:HospitalService,private service:AppointementService) { this.loadData(); }

  ngOnInit() {
    this.loadData();

  }



  list:Hospital[];
  loadData(){
    this.appserv.gethopital().subscribe((temp)=>{
      this.list=temp;
      console.log("list",this.list);
    })
  }

  remplir()
  {
    if(this.nom_cabinet == ''){
      this.loadData();
    }
  }
  search(){
    if(this.nom_cabinet != ''){
      this.list = this.list.filter(res=> {
      return res.name.toLocaleLowerCase().match(this.nom_cabinet.toLocaleLowerCase());
    })
    }

  }


  /************rendervous*************** */

  addrendervous() {
    var render = this.myForm.value as Appointement
      console.log('form : ',render)
      this.service.addrendervous(render).subscribe(res=>{
        console.log('res : ',res)
      })
}
}
