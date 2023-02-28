export interface AuthState {
  isLoggedIn: boolean;
  email: string | null;
  error: string | null;
}

interface LoginAction {
  type: 'LOGIN';
  payload: {email: string};
}

interface LogoutAction {
  type: 'LOGOUT';
}

interface ErrorAction {
  type: 'ERROR';
  payload: {message: string};
}

type AuthAction = LoginAction | LogoutAction | ErrorAction;

const initialState: AuthState = {
  isLoggedIn: false,
  email: null,
  error: null,
};

const authReducer = (state = initialState, action: AuthAction): AuthState => {
  console.log(action.type);
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
        email: action.payload.email,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        error: null,
      };
    case 'ERROR':
      return {
        ...state,
        isLoggedIn: false,
        email: null,
        error: action.payload.message,
      };
    default:
      return state;
  }
};

export default authReducer;
