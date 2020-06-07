//emit(eventname) 이벤트를 실행합니다.
process.on('exit', function(){
    console.log('종료!');
});

process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');

console.log('프로그램 실행중');
