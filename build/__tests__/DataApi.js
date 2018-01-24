'use strict';

var _DataApi = require('../DataApi');

var _DataApi2 = _interopRequireDefault(_DataApi);

var _testData = require('../testData');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = new _DataApi2.default(_testData.data);

describe('DataApi', () => {
  it('exposes articles as an object', () => {
    const articles = api.getArticles();
    const articleId = _testData.data.articles[0].id;
    const articleTitle = _testData.data.articles[0].title;

    expect(articles).toHaveProperty(articleId);
    expect(articles[articleId].title).toBe(articleTitle);
  });

  it('exposes authors as an object', () => {
    const authors = api.getAuthors();
    const authorId = _testData.data.authors[0].id;
    const authorFirstName = _testData.data.authors[0].firstName;
    expect(authors).toHaveProperty(authorId);
    expect(authors[authorId].firstName).toBe(authorFirstName);
  });
});