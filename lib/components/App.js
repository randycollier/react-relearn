import React from 'react';
import DataApi from '../DataApi';
// import { data } from '../testData';
import ArticleList from './ArticleList';
import axios from 'axios';
import Nav from './Nav';
import TodoApp from 'todo';
import Home from './home';
import HumanApp from './humans';
import {
  BrowserRouter as Router,
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
      <Router>
        <div tabIndex="-1" className="'container-fluid'" >
          <Nav />
          <Route exact path="/" component={Home}/>
          <Route path="/todo" component={TodoApp}/>
          <Route path="/humans" component={HumanApp} />  
        
          <h2 className={this.myClass()}>Hello Class Comp -- { this.state.answer }</h2>
          <ArticleList 
            articles={ this.state.articles }
            articleActions={ this.articleActions }
          />
        </div>
      </Router>
    );
  }
}

export default App;


