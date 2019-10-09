import { Action } from "rxjs/internal/scheduler/Action";
import { User } from '../../app.model';
import { AuthActions, AuthActionTypes } from '../actions/actions';

export interface State {
    user: User | null;
    loggedIn: boolean;
}

const initialState: State = {
    user: null,
    loggedIn: false
}

export const AuthReducer = (state = initialState, action: AuthActions) => {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user
            }
    }
        default: {
            return state;
        }
    }
}