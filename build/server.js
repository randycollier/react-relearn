'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _server = require('./renderers/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express2.default)();
app.use(_express2.default.static('public'));
app.set('view engine', 'ejs');

app.listen(_config2.default.port, listenHandler);

function listenHandler() {
  console.info(`Running on ${_config2.default.port}...`);
}

app.get('/', (req, res) => {
  const initialContent = (0, _server2.default)();
  res.render('index', { tester: 'big', initialContent });
});