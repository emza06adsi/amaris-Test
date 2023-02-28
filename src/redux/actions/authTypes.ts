import {User} from './userTypes';

export const LOGIN_SUCCESS = 'LOGIN';
export const LOGIN_FAILURE = 'ERROR';

export enum ActionTypes {
  GET_POPULAR_TV_SHOWS_REQUEST = 'GET_POPULAR_TV_SHOWS_REQUEST',
  GET_POPULAR_TV_SHOWS_SUCCESS = 'GET_POPULAR_TV_SHOWS_SUCCESS',
  GET_POPULAR_TV_SHOWS_FAIL = 'GET_POPULAR_TV_SHOWS_FAIL',
}

interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
  payload: User;
}

interface LoginFailureAction {
  type: typeof LOGIN_FAILURE;
  payload: string;
}

export type AuthActionTypes = LoginSuccessAction | LoginFailureAction;

export interface TvShow {
  id: number;
  name: string;
  overview: string;
  poster_path: string | null;
  vote_average: number;
  backdrop_path: string;
}

export interface TvShowResponse {
  page: number;
  results: TvShow[];
  total_pages: number;
  total_results: number;
}


export interface TvShowsAction {
  type: ActionTypes;
  payload?: TvShow[];
}

export interface TopRateAction {
  type: ActionTypes;
  payload?: TvShow[];
}

export interface TvShowsState {
  isLoading?: boolean;
  tvShows?: TvShow[];
  error?: string;
}