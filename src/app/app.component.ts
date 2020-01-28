import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  isHomeRoute() {
    return this.router.url === '/home';
  }
  // isServicesRoute() {
  //   return this.router.url === '/home';
  // }
  // isBlogRoute() {
  //   return this.router.url === '/blog';
  // }
  // isContactRoute() {
  //   return this.router.url === '/contact';
  // }
  // isAboutRoute() {
  //   return this.router.url === '/about';
  // }
  // isLoginRoute() {
  //   return this.router.url === '/login';
  // }
  // isSigninRoute() {
  //   return this.router.url === '/signin';
  // }
}
