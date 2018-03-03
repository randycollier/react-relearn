import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

const images = () =>{

  return (
    <div>
      <img src='http://localhost:8080/api/files/paulies1.jpg' />
      <img src='http://localhost:8080/api/files/himalaya_1.jpg' />
      <img src='http://localhost:8080/api/files/wellbodysite_1.jpg' />
    </div>
  );
};

const wft = () =>{
  return (<h1>wtf</h1>);
};
const Portfolio = (props) =>{
  
  return(
    <div className='container'>
      <h1>portfolio</h1>
      <Route path={`/portfolio`} component={images} />
      <Route path={`/portfolio/wtf`} component={images} />
     <Route path={`/portfolio/:topicId`} render={() => (
        <Redirect to="/"/>
      )}/>
    </div>
    
  );
};

export default Portfolio;
