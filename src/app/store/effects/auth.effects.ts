import { Injectable } from '@angular/core'; 
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';  
import { map, switchMap, catchError, tap ,filter} from 'rxjs/operators'; 
import { Observable,  of } from 'rxjs';  

import { AuthService } from '../../services/auth.service';
import {
  AuthActionTypes,
  LogIn, LogInSuccess, LogInFailure,
  SignUp, SignUpSuccess, SignUpFailure,
  LogOut,
} from '../actions/auth.actions';  
import { User } from 'src/app/models/Users';

@Injectable()
export class AuthEffects {

  constructor(
    private actions: Actions,
    private authService: AuthService,
    private router: Router,
  ) {}

  @Effect()
  Login: Observable<any> = this.actions
   .pipe(
     ofType(AuthActionTypes.LOGIN),
      map((action: LogIn) => action.payload), 
      switchMap(payload => {
          return this.authService.logIn(payload.username, payload.password)
      .pipe(
          map((user) => {
          console.log(user);
          return new LogInSuccess({token: user.token, email: payload.username});
          }),
          catchError((error) => {
              return of(new LogInFailure({ error: error }));
          })
      ); 
}));


  @Effect()
  LogIn: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN),
     map((action: LogIn) => action.payload),
     switchMap(payload => {
      return this.authService.logIn(payload.username, payload.password)
      .pipe( 
        map((user:User) => {
          return new LogInSuccess({token: user.token, username: payload.username});
        }), 
        catchError((error) => {
          return of(new LogInFailure({ error: error }));
          // return Observable.of(new LogInFailure({ error: error }));
        })
        );
   }));
   


  @Effect({ dispatch: false })
  LogInSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  LogInFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGIN_FAILURE)
  );

  @Effect()
  SignUp: Observable<any> = this.actions.pipe(
     ofType(AuthActionTypes.SIGNUP),
     map((action: SignUp) => action.payload), 
     
     switchMap(payload => {
      return this.authService.signUp(payload.username, payload.password)
      .pipe(
          map((user) => {
          console.log(user);
          return new SignUpSuccess({token: user.token, email: payload.username});
      }),
      catchError((error) => {
          return of(new SignUpFailure({ error: error }));
      })); 
    }));
 
    

  @Effect({ dispatch: false })
  SignUpSuccess: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_SUCCESS),
    tap((user) => {
      localStorage.setItem('token', user.payload.token);
      this.router.navigateByUrl('/');
    })
  );

  @Effect({ dispatch: false })
  SignUpFailure: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.SIGNUP_FAILURE)
  );

  @Effect({ dispatch: false })
  public LogOut: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.LOGOUT),
    tap((user) => {
      localStorage.removeItem('token');
    })
  );

  @Effect({ dispatch: false })
  GetStatus: Observable<any> = this.actions.pipe(
    ofType(AuthActionTypes.GET_STATUS),
    switchMap(payload => {
      return this.authService.getStatus();
    }) 
  ) 
}
