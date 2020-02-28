import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppointementComponent } from './appointement/appointement.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SigninComponent } from './signin/signin.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { GridComponent } from './grid/grid.component';
import { HospitalCatComponent } from './hospitalCat/hospitalCat.component';



const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'services', component: AppointementComponent},
  {path:'blog', component: BlogComponent} ,
  {path:'contact', component: ContactComponent} ,
  {path:'about', component: AboutComponent} ,
  {path:'signin', component: SigninComponent} ,
  {path:'login', component: LoginComponent} ,
  {path:'profile', component: ProfileComponent} ,
  {path:'hospital', component: GridComponent} ,
  {path:'hospitalcat', component: HospitalCatComponent} ,
  {path:'grid', component: HospitalCatComponent} ,
  {path:'**',redirectTo:'/home'}
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
                              LoginComponent,
                              ProfileComponent,
                              GridComponent
                              ]
