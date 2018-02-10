import React from 'react';
import styled from 'styled-components';
const Avitar = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

const Home = () => {
  return (
    <div className="jumbotron">
      <div className="container">
        <Avitar src='http://localhost:8080/api/files/rc.jpg'  />
        <p>My name is Randy Collier aka: Ran and Raaaaaaaaaaaaaaaaandy.</p>
        <p>I am an experienced and resourceful software developer; interested in front-end development, full stack development, and User Interface/User Experience (UI/UX).</p>
        <p>Antidote Design has been a name that I have used for over 20 years to allow me to explore and showcase current and past works.
        When I was studying Art at The Ohio State University, I pushed my self to learn about Visual Communications and applied it to fine exciting opportunities.
        I had an idea of an identity for my self as a freelancer and was inspired by old commics where the solution was in the antidote.</p>
      </div>
    </div>
  );
};

export default Home;