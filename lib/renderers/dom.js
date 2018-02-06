import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';

import { Provider } from 'react-redux';
// import { createStore } from 'redux';
// import reducer from 'reducers';
// import store from 'store';
// const store = createStore(reducer)

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );

render(<App />,
  document.getElementById('root')
);