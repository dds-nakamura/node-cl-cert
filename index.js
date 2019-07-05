var https = require('https');
var fs = require('fs');
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log(req.connection.getPeerCertificate());
  res.header({ 'Content-Type': 'text/plain' });
  res.send("Hello World\n");
  res.status(200);
});

var option = {
  key: fs.readFileSync('./keyfiles/server.key'),    // サーバー証明書内の公開鍵と対をなすprivate key
  cert: fs.readFileSync('./keyfiles/server.crt'),    // サーバー証明書
  ca: fs.readFileSync('./keyfiles/client.crt'),    // クライアント証明書
  requestCert: true,            // クライアント認証（true:する, false:しない）
  rejectUnauthorized: true        // 認証失敗時に破棄（true:する, false:しない）
};

var server = https.createServer(option, app).listen(process.env.port, function () {
  console.log("server listening on port %d", server.address().port);
});

console.log('Server running at https://127.0.0.1:[port]');


/*
var http = require('http');
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
}).listen(3000);
*/