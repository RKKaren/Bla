'use strict'

const http = require('http');
const {PORT, upper, poqr} = require('./ports');
const [a, b] = [1, 2]
const server = http.createServer((rq, res) => {
    if (rq.url === '/') {
      res.setHeader('content-type','text/html');
      res.end(`
        <!doctype html>
        <body>
        <h1>${upper(__dirname)}</h1>
        <p>${poqr('WHAT a body =P') }</p>
        </body>
      `)
    } else {
      res.end('UNKNOWN')
    }
})

server.listen(PORT, () => console.log('Started our server'));
