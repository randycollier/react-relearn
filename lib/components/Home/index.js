import React from 'react';
import styled from 'styled-components';
import PortfolioIcon from './components/portfolio';
import ResumeIcon from './components/resume';
const Avitar = styled.img`
max-width: 100%;
height:auto;
  border-radius: 50%;
`;
const Container = styled.div`
  dislpay: flex;
  flex-flow: column;
  align-items: center;
`;

const getFile= (path='') =>{
  const protocal =  window.location.protocol;
  const host = window.host;
  const port = window.port;
  return `${protocal}//${host}:${port}/${path}`;
};

const Home = () => {
  
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-3 offset-md-2 text-center ">
              <Avitar src={ getFile('api/files/rc.jpg')}  />
            </div>
            <div className="col-sm-12 col-md-5 ">
              <div>
                <p>My name is Randy Collier </p>
                <p>I am an experienced and resourceful software developer; interested in front-end development, full stack development, and User Interface/User Experience (UI/UX).</p>
                <p>Antidote Design has been a name that I have used for over 20 years to allow me to explore and showcase current and past works.
              When I was studying Art at The Ohio State University, I pushed my self to learn about Visual Communications and applied it to fine exciting opportunities.
              I had an idea of an identity for my self as a freelancer and was inspired by old commics where the solution was in the antidote.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section >
    
        <div className="container marketing">
          <div className="row">
            <div className="col-sm-3 offset-sm-2 text-center">
              <PortfolioIcon />
              <h2>Portfolio</h2>
              <p><a className="btn btn-secondary" href="#" role="button">View Portfolio »</a></p>
            </div>

            <div className="col-sm-3 offset-sm-2 text-center">
              <ResumeIcon />
              <h2>Resume</h2>
              <p><a className="btn btn-secondary" href="#" role="button">View Resume »</a></p>
            </div>
          </div>
        </div>
    
      </section>



    </div>
  );
};

export default Home;



