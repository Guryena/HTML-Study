function funName(x, y, z) {
    console.log("x : " + x);
    console.log("y : " + y);
    console.log("z : " + z);

    var result = x * y +z;

    return result;
}
function run() {
    var varResult = funName(2, 3, 4);
    console.log("varResult : " + varResult);

    varResult = funName(2,3,4,5); //전달은 되나, 할당이 안됨
    console.log("varResult : " + varResult);

    varResult = funName(2,3); //z값이 할당되지 않았기에 result 알 수 없음
    console.log("varResult : " + varResult);
}

run();