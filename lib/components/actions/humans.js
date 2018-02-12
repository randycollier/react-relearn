import {
  FETCH_HUMANS_LOADING,
  FETCH_HUMANS_ERROR,
  FETCH_HUMANS_SUCCESS
} from './actionTypes';


export function humansHasErrored(bool) {
  return {
    type: 'FETCH_HUMANS_ERROR',
    hasErrored: bool
  };
}

export function humansIsLoading(bool) {
  return {
    type: 'FETCH_HUMANS_LOADING',
    isLoading: bool
  };
}

export function humansFetchDataSuccess(humans) {
  return {
    type: 'FETCH_HUMANS_SUCCESS',
    humans
  };
}
export const humansFetchData = (url=`http://${window.host}:${window.port}/api/humans`) => {
  return (dispatch) => {
    dispatch(humansIsLoading(true));
  
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        dispatch(humansIsLoading(false));

        return response;
      })
      .then((response) => response.json())
      .then((items) => dispatch(humansFetchDataSuccess(items)))
      .catch(() => dispatch(humansHasErrored(true)));
  };
};
