const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('./index.html');
const mens = fs.readFileSync('./mens.html');
const womens = fs.readFileSync('./women.html');
const products = fs.readFileSync('./products.html');
const contact = fs.readFileSync('./contact.html');

const server = http.createServer((req, res)=>{
    console.log(req.url);
    let url = req.url;

    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    if(url == '/'){
      res.end(home);
    }
    else if(url == '/mens'){
      res.end(mens);
    }
    else if(url == '/womens'){
      res.end(womens);
    }
    else if(url == '/products'){
      res.end(products);
    }
    else if(url == '/contact'){
      res.end(contact);
    }
    else{
      res.statusCode = 404;
      res.end('<h1>404 not found</h1>');
    }
});

server.listen(port, hostname, ()=>{
  console.log(`server running at http://${hostname}:${port}/`);
});
