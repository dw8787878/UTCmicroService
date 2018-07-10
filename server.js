const express = require('express');
const bodyParser = require('body-parser');
const app = express();


const port = 3000;

app.get('/', (req, res) => res.send('Hey there D!') )

app.listen(port, (err)=>{
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`Server is running local at port: ${port}`);
});


app.use(bodyParser.json())

app.use(function (req, res){
  res.setHeader('Content-Type','text/plain');
  res.write('you posted:\n');
  res.end(JSON.stringify(req.body, null, 2))
})
