//명시(선언)적 함수 생성
function funName() {
    console.log("명시(선언)적 함수의 기능을 실행");
    document.write("<br>명시(선언)적 함수의 기능을 실행");
    return "명시(선언)적 함수의 기능을 실행";
}

//익명 함수 생성
var funAnonymous = function() {
    console.log("익명 함수의 기능을 실행");    
    document.write("<br>익명 함수의 기능을 실행");
    return "익명 함수의 기능을 실행";
}


funName();
funAnonymous();

console.log("funName함수 보기 : \n" + funName);
console.log("funName함수 실행 : \n" + funName());

console.log("funAnonymous함수 보기 : \n" + funAnonymous);
console.log("funAnonymous함수 실행 : \n" + funAnonymous());

//함수 실행 순서
fun1(); //complete
// fun2(); //error

function fun1() {
    console.log("fun1 run");    
}
var fun2 = function() {
    console.log("fun2 run");
}

fun2(); //complete