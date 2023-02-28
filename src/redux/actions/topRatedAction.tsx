import {ThunkAction} from 'redux-thunk';
import {TopRatedRequest} from '../../api/TopRated';
import {RootState} from '../reducers/rootReducer';
import {TvShowResponse, TvShowsAction, ActionTypes, TvShow, TopRateAction} from './authTypes';

export const fetchTopRated =
  (): ThunkAction<void, RootState, unknown, TopRateAction> =>
  async dispatch => {
    try {
      const response: TvShow[] = await TopRatedRequest();
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
