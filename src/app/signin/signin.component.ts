import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../models/user';
import { userservice } from '../services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myngForm = new FormGroup({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    number:new FormControl(''),
    password:new FormControl(''),
    gender:new FormControl(''),
    cin:new FormControl(''),
    date_naissence:new FormControl(''),
    address:new FormControl(''),
    assurance:new FormControl(''),
    type:new FormControl(''),
  })

  constructor(private service:userservice) { }

  ngOnInit() {
  }
  onSubmit() {
    console.warn(this.myngForm.value);
     var patient = this.myngForm.value as User
     this.service.AddUser(patient).subscribe(
       res=>{
         console.log(res)
       }
     )
  }
}
