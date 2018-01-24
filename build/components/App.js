'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DataApi = require('../DataApi');

var _DataApi2 = _interopRequireDefault(_DataApi);

var _testData = require('../testData');

var _ArticleList = require('./ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

const api = new _DataApi2.default(_testData.data);

class App extends _react2.default.Component {
  constructor() {
    super();

    this.asyncFunc = () => {
      return Promise.resolve(37);
    };

    this.articleActions = {
      lookupAuthor: authorId => this.state.authors[authorId]
    };
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
      answer: 42
    };
  }

  componentDidMount() {
    var _this = this;

    return _asyncToGenerator(function* () {
      _this.setState({
        answer: yield _this.asyncFunc()
      });
    })();
  }

  render() {
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h2',
        null,
        'Hello Class Comp -- ',
        this.state.answer
      ),
      _react2.default.createElement(_ArticleList2.default, {
        articles: this.state.articles,
        articleActions: this.articleActions
      })
    );
  }
}

exports.default = App;