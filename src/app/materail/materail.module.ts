import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule,MatInputModule,MatFormFieldControl,MatFormFieldModule, MatAutocompleteModule} from '@angular/material';

const materialComp=[
  MatButtonModule,
  MatInputModule,MatFormFieldControl,MatFormFieldModule,
  MatAutocompleteModule
]



@NgModule({
  declarations: [],
  imports: [
    materialComp
  ],
  exports:[
    materialComp
  ]
})
export class MaterailModule { }
