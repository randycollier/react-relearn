import React from 'react';
import Humans from './handlers/Humans';
import reducers from './reducers';
import reducerRegistry from 'components/store/reducerRegistry';
// reducerRegistry.register('humans',reducers);

const HumansDemo = () => {
  return (
    <div>
      HumansDemo
      <br />
      <Humans />
    </div>
  );
};

export default HumansDemo;