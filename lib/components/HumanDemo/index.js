import React from 'react';
import Humans from './handlers/Humans';
import HumanDetails from './handlers/HumanDetails';
import reducers from './reducers';
import reducerRegistry from 'components/store/reducerRegistry';
import {
  Switch,
  Route,
} from 'react-router-dom';
const routePath = '/humans';
const HumansDemo = () => {
  return (
    <div>
      HumansDemo
      <br />
        <Route path='/humans/:humanId' exact component={HumanDetails} />
        {/* <Route path={routePath} component={Humans} /> */}
        <Humans/>
     
    </div>
  );
};

export default HumansDemo;
