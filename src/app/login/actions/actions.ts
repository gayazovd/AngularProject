import { Action } from '@ngrx/store';
import { User } from 'src/app/app.model';


export enum AuthActionTypes {
    Login = 'AUTH_LOGIN',
    Logout = 'AUTH_LOGOUT',
    LoginSuccess = "AUTH_LOGIN_SUCCESS",
    LoginFailure = "AUTH_LOGIN_FAILURE",
    LoginRedirect = "AUTH_LOGIN_REDIRECT"
}


export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload) { }
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess

    constructor(public payload: { user: User }) { }
}

export type AuthActions = Login | LoginSuccess;