import {useState, useEffect} from 'react';
import {TvShow} from '../redux/actions/authTypes';
import {useSelector} from 'react-redux';

export const useMovies = () => {
  const {tvShows} = useSelector((state: any) => state.tvShows);
  return {tvShows};
};

export const useTopMovies = () => {
  const {tvShows: topRated} = useSelector((state: any) => state.TopRated);
  
  return {topRated};
};
