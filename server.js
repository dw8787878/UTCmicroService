const express = require('express');
const {resolve} = require('path');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator/check');
const {sanitizeBody} = require('express-validator/filter');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile(resolve(__dirname, '..', '/Users/darrynwu/UTCmicroService/public', 'index.html')));

app.post('/', (req, res) => {
  let dateString = req.body.date_string;
  //console.log('this is the req.body:', req.body);
  res.send(`We got your post! ${dateString}`)
});

app.listen(port, (err)=>{
  if (err) {
    return console.log('wtf happened?', err);
  }
  console.log(`Server is running local at port: ${port}`);
});
