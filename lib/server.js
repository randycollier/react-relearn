
import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './testData';
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.listen(config.port, listenHandler);

function listenHandler() {
  console.info(`Running on ${config.port}...`);
}

app.get('/data', (req, res) => {
  res.send(data);
});

app.get('/', (req, res) =>{
  const initialContent = serverRender();
  res.render('index', {tester:'big', initialContent});
});
