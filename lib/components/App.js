import React from 'react';
import DataApi from '../DataApi';
// import { data } from '../testData';
import ArticleList from './ArticleList';
import axios from 'axios';



class App extends React.Component{

  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
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
    lookupAuthor: authorId => this.state.authors[authorId],
  };
  myClass = () => "container-fluid"
  render() {
    // we can render something else here untill all is loaded
    return (
      <div tabIndex="-1" className="Button" >WTF
        <h2 className={this.myClass()}>Hello Class Comp -- { this.state.answer }</h2>
        <ArticleList 
          articles={ this.state.articles }
          articleActions={ this.articleActions }
        />
      </div>
    );
  }
}

export default App;


