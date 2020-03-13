import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointementComponent } from './appointement/appointement.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { ProfileComponent } from './profile/profile.component';
import { GridComponent } from './grid/grid.component'; 
import { StatusComponent } from './status/status.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LogInComponent } from './log-in/log-in.component';
import { LandingComponent } from './landing/landing.component'; 
import { HospitalCatComponent } from './hospitalCat/hospitalCat.component';
import { DoctorComponent } from './doctor/doctor.component'; 



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'services', component: AppointementComponent},
  {path:'blog', component: BlogComponent} ,
  {path:'contact', component: ContactComponent} ,
  {path:'about', component: AboutComponent} ,
  {path:'profile', component: ProfileComponent} , 
  {path:'grid', component: GridComponent} ,
  // {path:'**',redirectTo:'/home'},
  {path:'signin', component: SigninComponent} , 
  { path: 'log-in', component: LogInComponent },
  { path: 'sign-up', component: SignUpComponent },
  // { path: 'status', component: StatusComponent, canActivate: [AuthGuard] },
  // { path: '', component: LandingComponent }, 
  {path:'hospital', component: GridComponent} ,
  {path:'hospitalcat', component: HospitalCatComponent} ,
   {path:'doctor', component: DoctorComponent} ,
  {path:'grid', component: HospitalCatComponent} 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent=[
                              HomeComponent,
                              AppointementComponent,
                              BlogComponent,
                              ContactComponent,
                              AboutComponent,
                              SigninComponent,
                              LogInComponent,
                              ProfileComponent,
                              DoctorComponent,
                              GridComponent
                              ]
