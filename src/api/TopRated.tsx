import {TvShowResponse} from '../redux/actions/authTypes';
import {AxiosPath} from './axiosPath';

export const TopRatedRequest = async () => {
  try {
    const tvShows: TvShowResponse = await (
      await AxiosPath.get('/top_rated')
    ).data;
    return tvShows.results;
  } catch (error: any) {
    return error;
  }
};
