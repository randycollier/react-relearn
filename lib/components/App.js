import React from 'react';
import DataApi from '../DataApi';
import ArticleList from './ArticleList';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import HumanDemo from './HumanDemo';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';




class App extends React.Component{

  state = {
    articles: {},
    authors: {},
    answer: 42,
  };

  
  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    //function argument seems to be better practice.
    this.setState(()=>({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
  }

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  myClass = () => 'container-fluid';
  render() {
    // we can render something else here untill all is loaded
    return (
    
      <div tabIndex="-1" className="'container-fluid'" >
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/humans" component={HumanDemo} />
        </Switch>
      </div>
    );
  }
}

export default App;


