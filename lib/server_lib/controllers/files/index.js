import express from 'express';
const files = express.Router();
var contentDisposition = require('content-disposition')
import mime from 'mime';
import path from 'path';
import fs from 'fs';

files.get('/resume',(req, res, next) =>{
  const file = 'Randy_Collier_Resume.pdf';
  const filePath = path.join(__basedir,'../','files',file);
  res.download(filePath);
});

files.get('/:fileName', (req, res) => {

  const file = req.params['fileName'];
  const type = mime.getType(file) || 'text/plain';
  const filePath = path.join(__basedir,'../','files',file);
  const s = fs.createReadStream(filePath);
  s.on('open', function () {
    res.set('Content-Type', type);
    s.pipe(res);
  });
  s.on('error', function () {
    res.set('Content-Type', 'text/plain');
    res.status(404).end('Not found');
  });


});


files.get('/*',(req, res) => {
  res.status(400).json({ message: "File does not exist." });

});


export default files;