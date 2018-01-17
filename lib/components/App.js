import React from 'react';
import DataApi from '../DataApi';
import { data } from '../testData';
import ArticleList from './ArticleList';

const api = new DataApi(data);

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
      answer: 42,
    };
  }
    
  asyncFunc = () => {
    return Promise.resolve(37);
  };
  
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }

  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };
  
  render() {
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


