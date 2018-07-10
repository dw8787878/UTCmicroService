const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hey there D!') )

app.listen(port, (err)=>{
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`Server is running local at port: ${port}`);
});


