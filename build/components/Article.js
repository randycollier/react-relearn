'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Article = props => {
  const { article, actions } = props;
  const author = actions.lookupAuthor(article.authorId);

  const styles = {
    article: {
      paddingBottom: 10,
      borderBottomStyle: 'solid',
      borderBottomColor: '#aaa',
      marginBottom: 10
    },
    title: {
      fontWeight: 'bold'
    },
    date: {
      fontSize: '0.8em',
      color: '#888'
    },
    author: {
      paddingTop: 10,
      paddingBottom: 10
    },
    body: {
      paddingLeft: 20
    }
  };
  const dateDisplay = dateString => new Date(dateString).toDateString();

  return _react2.default.createElement(
    'div',
    { style: styles.article },
    _react2.default.createElement(
      'div',
      { style: styles.title },
      article.title
    ),
    _react2.default.createElement(
      'div',
      { style: styles.date },
      dateDisplay(article.date)
    ),
    _react2.default.createElement(
      'div',
      { style: styles.website },
      _react2.default.createElement(
        'a',
        { href: author.website },
        author.firstName,
        ' ',
        author.lastName
      )
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      article.body
    )
  );
}; // functional component
exports.default = Article;