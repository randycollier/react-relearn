import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';
import axios from 'axios';




class App extends React.Component{
  constructor() {
    super();
    this.state = {
      articles: {},
      authors: {},
      answer: 42,
    };
  }
    
  asyncFunc = () => {
    return Promise.resolve(37);
  };
  
  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(()=>({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };
  
  render() {
    // we can render something else here untill all is loaded
    return (
      <div>
        <h2>Hello Class Comp -- { this.state.answer }</h2>
        <ArticleList
          articles={ this.state.articles }
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;


