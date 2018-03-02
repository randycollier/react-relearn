import reducerRegistry from 'components/store/reducerRegistry';


import {
  FETCH_HUMANS_LOADING,
  FETCH_HUMANS_ERROR,
  FETCH_HUMANS_SUCCESS
} from '../actions/actionTypes';

export function humansHasErrored(state = false, action) {
  switch (action.type) {
    case FETCH_HUMANS_ERROR:
      return action.hasErrored;

    default:
      return state;
  }
}


export function humansIsLoading(state = false, action) {
  switch (action.type) {
    case FETCH_HUMANS_LOADING:
      return action.isLoading;

    default:
      return state;
  }
}

export function humans(state = [], action) {
  switch (action.type) {
    case FETCH_HUMANS_SUCCESS:
      return action.humans;

    default:
      return state;
  }
}



// export default function registerReducers () {

//   reducerRegistry.register('humansHasErrored', humansHasErrored);
//   reducerRegistry.register('humansIsLoading', humansIsLoading);
//   reducerRegistry.register('humans', humans);
// }
