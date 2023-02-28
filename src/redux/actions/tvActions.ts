import {ThunkAction} from 'redux-thunk';
import {TvShowsRequest} from '../../api/TvShows';
import {RootState} from '../reducers/rootReducer';
import {TvShowResponse, TvShowsAction, ActionTypes, TvShow} from './authTypes';

export const fetchTvShows =
  (): ThunkAction<void, RootState, unknown, TvShowsAction> =>
  async dispatch => {
    try {
      const response: TvShow[] = await  TvShowsRequest();
      dispatch({
        type: ActionTypes.GET_POPULAR_TV_SHOWS_SUCCESS,
        payload: response,
      });
    } catch (error: any) {
      dispatch({
        type: ActionTypes.GET_POPULAR_TV_SHOWS_FAIL,
        payload: error.message,
      });
    }
  };
