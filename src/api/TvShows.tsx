import {TvShowResponse} from '../redux/actions/authTypes';
import {AxiosPath} from './axiosPath';

export const TvShowsRequest = async () => {
  try {
    const tvShows: TvShowResponse = await (
      await AxiosPath.get('/popular')
    ).data;
    return tvShows.results;
  } catch (error: any) {
    return error;
  }
};
