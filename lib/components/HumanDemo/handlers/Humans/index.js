import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import { humansFetchData } from '../../actions/humans';
// import registerReducers from '../../reducers';



class Humans extends React.Component{
  componentDidMount() {
    
    this.props.fetchData();
  }

  listHumans=(humans) =>{
    return humans.map((human) =>{
      return (<div key={human.id}><Link to={'/humans/'+human.id} >{human.first_name}</Link></div>);
    });
  }
  render() {

    const {isLoading, humans} = this.props;
    if(isLoading) {
      return (<div>loading...</div>);
    }
    return (<div className='contd-flex flex-wrapainer'>{ this.listHumans(humans) }</div>);
  }
}

const mapStateToProps = (state) => {
  
  return {
    humans: state.humans.humans,
    hasErrored: state.humans.itemsHasErrored,
    isLoading: state.humans.itemsIsLoading
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(humansFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Humans);
