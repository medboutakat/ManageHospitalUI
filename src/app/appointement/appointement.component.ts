import { Component, OnInit } from '@angular/core';
import { AppointementService } from '../services/appointement.service';
import { Appointementstatus } from '../models/appointementstatus';
import { HospitalService } from '../services/hospital.service';
import { Appointement } from '../models/appointement';
import { Hospital } from '../models/hospital';
import { FormGroup, FormControl } from '@angular/forms';
import { CityService } from '../services/city.service';
import { City } from '../models/city';
import {MaterailModule} from '../materail/materail.module';
import { Observable } from 'rxjs';
export{MaterailModule};
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-appointement',
  templateUrl: './appointement.component.html',
  styleUrls: ['./appointement.component.css']
})
export class AppointementComponent implements OnInit {
  myControl = new FormControl();


  stateCtrl = new FormControl();
  filteredStates: Observable<City[]>;

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
  tmp;


  citys:City[]

  constructor(private appserv:HospitalService,private service:AppointementService, private cityService:CityService)
  {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) 
        : this.citys.slice())
      );
      console.log("filtersate : ",this.filteredStates)
  }

  private _filterStates(value: string): City[] {
    const filterValue = value.toLowerCase();

    return this.citys.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }

  ngOnInit() {
    this.cityService.getCity().subscribe(res=>{
      this.citys = res as City[]
      console.log('citys : ',this.citys)

    })
    this.loadData();

  }
  displayFn(user?: City): string | undefined {
    return user ? user.name : undefined;
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
