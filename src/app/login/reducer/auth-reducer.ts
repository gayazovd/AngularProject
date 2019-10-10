import { Action } from "rxjs/internal/scheduler/Action";
import { User, Course } from '../../app.model';
import { AuthActions, AuthActionTypes, coursesList } from '../actions/actions';
import { InfoAboutUser } from '../../app.model';
import { createReducer, on } from '@ngrx/store';
import { state } from '@angular/animations';

export interface State {
    user: User | null;
    loggedIn: boolean;
    userInfo?: InfoAboutUser;
}

const initialState: State = {
    user: null,
    loggedIn: false
}

export interface StateForCoursesList {
    courses: Course[]
}

const initialStateForCoursesList: StateForCoursesList = {
    courses: []
}

export const AuthReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload
            }
        }
        case AuthActionTypes.GetUserInfo: {
            return {
                ...state,
                loggedIn: true,
                userInfo: action.payload
            }
        }
        default: {
            return state;
        }
    }
}

const _coursesListReducer = createReducer(initialStateForCoursesList, on(coursesList, (state, { courses }) => ({ ...state, courses: courses })))

export const coursesListReducer = (state, action) => _coursesListReducer(state, action)