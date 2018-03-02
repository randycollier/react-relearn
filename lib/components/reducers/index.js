import { combineReducers } from 'redux';
// import { humans, humansHasErrored, humansIsLoading } from './humans';

// export default combineReducers({
//   humans,
//   humansHasErrored,
//   humansIsLoading
// });


// import {createStore, combineReducers} from 'redux';

const rootReducerInitialState = {
  rootA: 1,
  rootB: 1
};
const rootReducer = (state = rootReducerInitialState, action) => {
  switch (action.type){
    case 'INC_A': return {...state, rootA: state.rootA + 1};
    case 'DEC_A': return {...state, rootA: state.rootA - 1};
    case 'INC_B': return {...state, rootB: state.rootB + 1};
    case 'DEC_B': return {...state, rootB: state.rootB - 1};
  }
  return state;
};
export default combineReducers({rootReducer});
// const store = createStore(combineReducers({app: rootReducer}));