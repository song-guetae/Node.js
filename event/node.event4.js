//once 메서드 사용
process.once('uncaughtException', function(error) {
    console.log('예외 발생!');
});

var test = function(){
    setTimeout(test,2000);
    error.error.error();
}
setTimeout(test,2000);