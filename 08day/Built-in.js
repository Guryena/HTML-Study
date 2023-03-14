var timeoutID = setTimeout(function(){
    alert("after 3s Start");
},3000);
// clearTimeout(timeoutID);

//interval = 시간적인 간격
var intervalID = setInterval(function() {
    console.log('2초마다 실행');
}, 2000);

var printTimeOutID = setTimeout(() => {
    clearInterval(printIntervalID)
    console.log("finish")
}, 7000);

var printIntervalID = setInterval(() => {
  console.log("*");  
}, 2000);

//문자열 코드를 그대로 소스코드로
//해킹의 위험으로 절대 사용 금지
var varEval = "console.log('eval함수')";
eval(varEval);

varEval = "document.write('<p>eval함수</p>');"
eval(varEval);