var http = require('http');

var server = http.createServer();

server.on('request', function(code){
    console.log('Request On');
});

server.on('connection', function(code){
    console.log('connection');
});

server.on('close', function (code){
    console.log('close');
});

server.listen(52273);