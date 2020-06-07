//EventEmitter 객체를 생성한다.

var EventEmitter = require('events')
var custom = new EventEmitter()

custom.on('tick', function(code){
    console.log('이벤트 실행!');
});

custom.emit('tick');


