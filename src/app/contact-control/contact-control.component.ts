import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact-control',
  templateUrl: './contact-control.component.html',
  styleUrls: ['./contact-control.component.css']
})
export class ContactControlComponent implements OnInit {



  @Input() cities:any;
  
  @Input() contactModel:any;


  myFormContact = new FormGroup({
    // id:new FormControl(''),
    email:new FormControl(''),
    phone1:new FormControl(''),
    phone2: new FormControl(''),
    whatsApp: new FormControl(''),
    fax: new FormControl(''),
    cityId : new FormControl(''),
    adress1:new FormControl(''),
    adress2: new FormControl(''),
    other:new FormControl(''),
  })

  constructor() { 
  

  }

  ngOnInit() {
  }

}
