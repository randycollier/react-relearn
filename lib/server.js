global.__basedir = __dirname;

import express from 'express';
import config from './config';
import 'path';
import { data } from './testData';
import api_controllers from './server_lib/controllers';
const app = express();
app.use(express.static('public'));
app.set('view engine', 'ejs');

console.log(`${__dirname}/../views`, 'views path');
console.log(__dirname, 'dirname');
app.set('views', `${__dirname}/../views`);

app.listen(config.port, listenHandler);

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

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
  
  res.render('index');
});
