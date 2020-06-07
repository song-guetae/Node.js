//이벤트 제거
var onUncaughtException = function(error){
    console.log('예외발생!');
    process.removeListener('uncaughtException', onUncaughtException);
};

process.on('uncaughtException', onUncaughtException);
var test = function(){
    setTimeout(test, 2000);
    error.error.error();
};

setTimeout(test,2000);