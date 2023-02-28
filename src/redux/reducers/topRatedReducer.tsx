import {ActionTypes, TvShow, TvShowsState} from '../actions/authTypes';

export interface TopRate {
  type: string;
  payload?: any;
}

const initialState: TvShowsState = {
  isLoading: false,
  tvShows: [],
  error: undefined,
};

const TopRatedReducer = (
  state = initialState,
  action: TopRate,
): TvShowsState => {
  switch (action.type) {
    case ActionTypes.GET_POPULAR_TV_SHOWS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.GET_POPULAR_TV_SHOWS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        tvShows: action.payload,
      };
    case ActionTypes.GET_POPULAR_TV_SHOWS_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default TopRatedReducer;
