import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'components/reducers';
// import DevTools from '../containers/DevTools';
import reducerRegistry from './reducerRegistry';


const initialState = {};

// Preserve initial state for not-yet-loaded reducers
const combine = (reducers) => {

  const reducerNames = Object.keys(reducers);
  Object.keys(initialState).forEach((item) => {
    if (reducerNames.indexOf(item) === -1) {
      reducers[item] = (state = null) => state;
    }
  });
  return combineReducers(reducers);
};


reducerRegistry.register('rootReducer', rootReducer);

const reducer = combine(reducerRegistry.getReducers());

export default function configureStore(initialState) {
  /* eslint-disable no-underscore-dangle */
  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
  );
  /* eslint-enable */


  // Replace the store's reducer whenever a new reducer is registered.
  reducerRegistry.setChangeListener((reducers) => {
    store.replaceReducer(combine(reducers));
  });

  return store;

}

