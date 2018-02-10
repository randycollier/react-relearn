import React from 'react';
import DataApi from '../DataApi';
import ArticleList from './ArticleList';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import HumanDemo from './HumanDemo';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


const Container = styled.section`
  width:100%;
  display: flex;
  height: 100vh;
  flex-direction: row
`;

const StyledNav = styled(Nav)`
  display: flex;
  height:56px;
`;

const Content = styled.div`
  padding-top:56px;
  width:100%;
`;


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
    
      <Container tabIndex="-1"  >
        <StyledNav />
        <Content>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/humans" exact component={HumanDemo} />
          </Switch>
        </Content>
      </Container>
    );
  }
}

export default App;


