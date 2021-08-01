import * as ActionType from "./constans";

export const actListMovieRequest = () => {
  return {
    type: ActionType.LIST_MOVIE_REQUEST,
  };
};

export const actListMovieSuccess = (data) => {
  return {
    type: ActionType.LIST_MOVIE_SUCCESS,
    payload: data,
  };
};
export const actListMovieFailed = (data) => {
  return {
    type: ActionType.LIST_MOVIE_FAILED,
    payload: data,
  };
};
