function funName() {
    return arguments;
}

var varArr;

varArr = funName(1,2,3,4,5,6,7);
console.log("varArr : " + varArr);
console.log("varArr.length : " + varArr.length);

for (const i in varArr) {
    console.log("varArr[" + i + "] : " + varArr[i]);
}


//입력 받은 매개변수를 모두 더하는 함수
function allSum() {
    var sum = 0;

    // for (const i in arguments) {
    //     sum += i;
    // }
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
        
    }
    document.write("<br>" + sum);
}

allSum(2,5,7);
allSum(1,2,3,4,5,6,7,8,9,10);