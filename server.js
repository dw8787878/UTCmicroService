const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())

//app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public')));

app.get('/', (req, res) => res.sendFile('./public'));

app.post('/', (req, res) => res.send('We got your post!') )

app.listen(port, (err)=>{
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`Server is running local at port: ${port}`);
});
