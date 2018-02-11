import React from 'react';
import styled from 'styled-components';
const Avitar = styled.img`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
`;

const Home = () => {
  return (
    <div>
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



      <section >
    
        <div className="container marketing">


          <div className="row">
            <div className="col-lg-6">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
              <h2>Portfolio</h2>
              <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>

            <div className="col-lg-6">
              <img className="rounded-circle" src="data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" alt="Generic placeholder image" width="140" height="140" />
              <h2>Resume</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>
          </div>


    

        </div>
    
      </section>



    </div>
  );
};

export default Home;



// <div class="jumbotron"><div class="container" style="
//     display: flex;
//     /* align-items: center; */
//     align-items: flex-start;
// "><div style="
//     display: flex;
//     flex: 1;
//     align-items: top;
// ">
//     <div style="
//     /* flex: 1 100px; */
//     align-self: flex-top;
//     padding: 1em;
//     align-items: right;
//     margin-right: 0;
// "><img class="sc-bdVaJa kJVkOh" src="http://localhost:8080/api/files/rc.jpg"></div>
//     <div style="
//     max-width: 500px;
//     flex: 3;
// ">




