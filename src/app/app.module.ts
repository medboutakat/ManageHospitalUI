import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule} from './app-routing.module';
import { AppComponent} from './app.component';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { AppointementComponent } from './appointement/appointement.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { userservice } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GridComponent } from './grid/grid.component';

import { AgGridModule } from 'ag-grid-angular';
import { HospitalCategoryService } from './services/hospitalCategory.service';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatFormFieldModule,MatButtonModule, MatAutocompleteModule, MatSlideToggle} from '@angular/material'
import { HospitalCatComponent } from './hospitalCat/hospitalCat.component';
import { DoctorComponent } from './doctor/doctor.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AppointementComponent,
    BlogComponent,
    ContactComponent,
    AboutComponent,
    SigninComponent,
    LoginComponent,
    ProfileComponent,
    GridComponent,
    HospitalCatComponent,
    DoctorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatInputModule,MatFormFieldModule,MatButtonModule
  ],
  providers: [
    userservice,HospitalCategoryService,ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
