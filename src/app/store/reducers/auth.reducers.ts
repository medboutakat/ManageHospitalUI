 
import { AuthActionTypes, All } from '../actions/auth.actions';
import { User } from 'src/app/models/Users';


export interface State {
  // is a user authenticated?
  isAuthenticated: boolean;
  // if authenticated, there should be a user object
  user: User | null;
  // error message
  errorMessage: string | null;
}

export const initialState: State = {
  isAuthenticated: false,
  user: null,
  errorMessage: null
};

export function reducer(state = initialState, action: All): State {
  switch (action.type) {
    case AuthActionTypes.LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id:"1",
          firstName:"",
          lastName:"",
          sexe:"",
          contactId:null,
          password:"",
          passwordHash:"",
          passwordSalt:"",
          roleId:"",
          token: action.payload.token,
          username: action.payload.username
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.LOGIN_FAILURE: {
      return {
        ...state,
        user:null,
        errorMessage: 'Incorrect username and/or password.'
      };
    }
    case AuthActionTypes.SIGNUP_SUCCESS: {
      return {
        ...state,
        isAuthenticated: true,
        user: {
          id:"1",
          firstName:"",
          lastName:"",
          sexe:"",
          contactId:null,
          password:"",
          passwordHash:"",
          passwordSalt:"",
          roleId:"",
          token: action.payload.token,
          username: action.payload.username
        },
        errorMessage: null
      };
    }
    case AuthActionTypes.SIGNUP_FAILURE: {
      return {
        ...state,
        errorMessage: 'That email is already in use.'
      };
    }
    case AuthActionTypes.LOGOUT: {
      return initialState;
    }
    default: {
      return state;
    }
  }
}
