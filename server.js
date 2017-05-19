'use strict'

const http = require('http');
const ports = require('./ports');
const server = http.createServer((rq, res) => {
    if (rq.url === '/') {
      res.setHeader('content-type','text/html');
      res.end(`
        <!doctype html>
        <body>
        <h1>${ports.upper(__dirname)}</h1>
        <p>what a body =P </p>
        </body>
      `)
    } else {
      res.end('UNKNOWN')
    }
})

server.listen(8080, () => console.log('Started our server'));
