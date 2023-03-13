function callbackFunction(apple) {
    apple();
}

function eat() {
    document.write("<br>먹습니다");
}

function drink() {
    document.write("<br>마십니다");
}

callbackFunction(eat);
callbackFunction(drink);




function funName(funCBP, funCBF, num) {
    for (let i = 1; i <= 10; i++) {
    document.write("<br>" + num + " * " + i + " = " + (num * i));
        if (i < 10) {
           document.write("<br>"+num + "단 "+ funCBP(i));
        }
        else{
            funCBF();
        }
    }
}

function funCallBackProgress(n) {
    return ((n*10) + "% 진행");
}

function funCallBackFinish() {
    document.write("<br>서버 작업 완료");
}

funName(funCallBackProgress, funCallBackFinish, 7);