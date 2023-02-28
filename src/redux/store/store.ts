import {createStore, combineReducers} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import authReducer from '../reducers/authReducer';
import TopRatedReducer from '../reducers/topRatedReducer';
import tvShowsReducer from '../reducers/tvReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  tvShows: tvShowsReducer,
  topRated:TopRatedReducer
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
