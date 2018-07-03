const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
})

server.listen(port, (err)=>{
  if (err) {
    return console.log('something bad happened', err);
  }
  console.log(`Server is running local at port: ${port}`);
});
