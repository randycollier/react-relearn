import React from 'react';
import {connect} from 'react-redux';

import { humansFetchData } from 'components/actions/humans';

class Humans extends React.Component{
  componentDidMount() {
    
    this.props.fetchData();
  }

  listHumans=(humans) =>{
    return humans.map((human) =>{
      return (<div key={human.id}>{human.first_name}</div>);
    });
  }
  render() {
    debugger;
    const {isLoading, humans} = this.props;
    if(isLoading) {
      return (<div>loading...</div>);
    }
    return (<div>{ this.listHumans(humans) }</div>);
  }
}

const mapStateToProps = (state) => {
  return {
    humans: state.humans,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(humansFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Humans);
