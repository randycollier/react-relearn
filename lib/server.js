global.__basedir = __dirname;

import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './testData';
import api_controllers from './server_lib/controllers';
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.set('views', '__dirname/views')

app.listen(config.port, listenHandler);

function listenHandler() {
  console.info(`Running on ${config.port}...`);
}

app.get('/data', (req, res) => {
  res.send(data);
});

app.use('/api', api_controllers);

// app.get('/api', (req, res) =>{
//   res.send({'big':'data'});
// })

app.get('/*',  (req, res) =>{
  // const initialContent = await serverRender();
  res.render('index');
});
