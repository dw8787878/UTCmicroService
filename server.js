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

  let testValArr = dateString.split('/');
  let itemStr, itemDate, validFlag;
  let re = /^([\+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24\:?00)([\.,]\d+(?!:))?)?(\17[0-5]\d([\.,]\d+)?)?([zZ]|([\+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/;



  if (validFlag){
    res.send(`We got your post! ${dateString}`)
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
