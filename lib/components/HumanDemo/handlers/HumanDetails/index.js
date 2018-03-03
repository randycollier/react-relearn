import React from 'react';
// import {connect } from 'react-redux';
// import { humansFetchData } from '../../actions/humans';
// class HumanDetails extends React.Component {

//   render () {
//     return (
//       <h1>human</h1>
//     );
//   }
// }


const HumanDetails = (match) => {
  debugger;
  return (<h1>WTF {match.match.params.humanId}</h1>);
};

export default HumanDetails;

// const mapStateToProps = (state) => {
  
//   return {
//     humans: state.humans.humans,
//     hasErrored: state.humans.itemsHasErrored,
//     isLoading: state.humans.itemsIsLoading
//   };
// };


// const mapDispatchToProps = (dispatch) => {

//   debugger;
//   return {
//     fetchData: () => dispatch(humansFetchData())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(HumanDetails);