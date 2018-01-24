'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ArticleList = require('../ArticleList');

var _ArticleList2 = _interopRequireDefault(_ArticleList);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: { id: 'a' },
      b: { id: 'b' }
    },
    articleActions: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };
  it('renders correctly', () => {
    const tree = _reactTestRenderer2.default.create(_react2.default.createElement(_ArticleList2.default, testProps)).toJSON();

    console.log(tree);
    debugger;
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});