// authActions.ts

import {ThunkAction} from 'redux-thunk';
import {RootState} from '../reducers/rootReducer';
import {AuthActionTypes, LOGIN_SUCCESS, LOGIN_FAILURE} from './authTypes';
import {User} from './userTypes';
import {authenticateUser} from './authService';

export const login = (
  email: string,
  password: string,
): ThunkAction<void, RootState, unknown, AuthActionTypes> => {
  return async dispatch => {
    try {
      const user: User = await authenticateUser(email, password);
      console.log(user);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: user,
      });
    } catch (error: any) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: error.message,
      });
    }
  };
};
