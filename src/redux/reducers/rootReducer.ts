import { combineReducers } from 'redux';
import authReducer from './authReducer';
import TopRatedReducer from './topRatedReducer';
import tvShowsReducer from './tvReducer';

const rootReducer:any = combineReducers({
  auth: authReducer,
  tvShows: tvShowsReducer,
  TopRated:TopRatedReducer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
