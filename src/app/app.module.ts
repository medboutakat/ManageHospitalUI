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
import { ProfileComponent } from './profile/profile.component';
import { userservice } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

import { AgGridModule } from 'ag-grid-angular';
import { HospitalCategoryService } from './services/hospitalCategory.service';
import { ContactService } from './services/contact.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule,MatFormFieldModule,MatButtonModule, MatAutocompleteModule, MatSlideToggle} from '@angular/material'
import { HospitalCatComponent } from './hospitalCat/hospitalCat.component';
import { DoctorComponent } from './doctor/doctor.component';


import { RouterModule, CanActivate } from '@angular/router'; 
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AuthService } from './services/auth.service';
import { AuthEffects } from './store/effects/auth.effects';
import { reducers } from './store/app.states';
import {TokenInterceptor, ErrorInterceptor} from './services/token.interceptor';

import { AuthGuardService as AuthGuard } from './services/auth-guard.service';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LandingComponent } from './landing/landing.component';
import { ContactControlComponent } from './contact-control/contact-control.component';
import { HospitalComponent } from './hospital/hospital.component'; 
import { DoctorCatComponent } from './doctorCat/doctorCat.component';
import { DoctorCategoryService } from './services/doctorCategory.service';

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
    SignUpComponent, 
    LogInComponent,
    LandingComponent ,
    ProfileComponent,
    HospitalComponent,
    HospitalCatComponent,
    DoctorComponent,
    DoctorCatComponent,
    ContactControlComponent
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
    MatInputModule,MatFormFieldModule,MatButtonModule,
    StoreModule.forRoot(reducers, {}),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [
    userservice,HospitalCategoryService,DoctorCategoryService,ContactService,
    AuthService,
    // AuthGuard,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ErrorInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
