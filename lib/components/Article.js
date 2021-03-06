// functional component
import React from 'react';
import PropTypes from 'prop-types';

const Article = (props) => {
  const { article, actions} = props;
  const author = actions.lookupAuthor(article.authorId);

  const styles = {
    article: {
      paddingBottom: 10,
      borderBottomStyle: 'solid',
      borderBottomColor: '#aaa',
      marginBottom: 10,
    },
    title: {
      fontWeight: 'bold',
    },
    date: {
      fontSize: '0.8em',
      color: '#888',
    },
    author: {
      paddingTop: 10,
      paddingBottom: 10,
    },
    body: {
      paddingLeft: 20,
    }
  };
  const dateDisplay = (dateString) =>
    new Date(dateString).toDateString();

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{dateDisplay(article.date)}</div>
      <div style={styles.website}>
        <a href={author.website}>
          {author.firstName} {author.lastName}</a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })
};

export default Article;