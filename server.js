const express = require('express');
const {resolve} = require('path');
const bodyParser = require('body-parser');
const {body, validationResult} = require('express-validator/check');
const app = express();

const sanitize = require('./sanitize');
const {convertUTC} = require('./convertUTC');

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => res.sendFile(resolve(__dirname, '..', '/Users/darrynwu/UTCmicroService/public', 'index.html')));

app.post('/', (req, res) => {
  let dateString = req.body.date_string;

  //Sanitizes input from front end
  let validFlag = sanitize.verify(dateString);

  let testValArr = dateString.split('/');
  let itemStr, itemDate;


  if (validFlag){

    res.send(`This is your input: ${dateString} <br> This is the converted UTC format: ${convertUTC(dateString)}`)
  } else {
    res.send("Your input is not a valid ISO 8601 date string.  Please see: <a href='https://en.wikipedia.org/wiki/ISO_8601'>wiki ISO 8601</a>");
  }
});

app.listen(port, (err)=>{
  if (err) {
    return console.log('wtf happened?', err);
  }
  console.log(`Server is running local at port: ${port}`);
});
