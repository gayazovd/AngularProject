import { Action, props } from '@ngrx/store';
import { User, InfoAboutUser, Course } from 'src/app/app.model';
import { createAction } from '@ngrx/store';


export enum AuthActionTypes {
    Login = 'AUTH_LOGIN',
    Logout = 'AUTH_LOGOUT',
    LoginSuccess = "AUTH_LOGIN_SUCCESS",
    LoginFailure = "AUTH_LOGIN_FAILURE",
    LoginRedirect = "AUTH_LOGIN_REDIRECT",
    GetUserInfo = "GET_USER_INFO"
}


export class Login implements Action {
    readonly type = AuthActionTypes.Login;

    constructor(public payload) { }
}

export class LoginSuccess implements Action {
    readonly type = AuthActionTypes.LoginSuccess

    constructor(public payload: User) { }
}

export class GetUser implements Action {
    readonly type = AuthActionTypes.GetUserInfo;

    constructor(public payload: InfoAboutUser) { }
}

export type AuthActions = Login | LoginSuccess | GetUser;


export const coursesList = createAction('GET_COURSES_LIST',
    props<{ courses: Course[] }>()
);