function funName() {
    return function (x) {
        for (let i = 1; i < 10; i++) {
            console.log(x + " * " + i + " = " + (x*i));
            document.write("<br>" + x + " * " + i + " = " + (x*i));
        }
    };
}

var returnFun = funName();

returnFun(4);
returnFun(5);
returnFun(6);
returnFun(7);

function outFun(width, height) {
    document.write("<br>triangle : "+ triangle());
    document.write("<br>quadrangle : "+ quadrangle());

    function triangle() {
        return (width * height) / 2;
    }

    function quadrangle() {
        return (width * height);
    }
}

outFun(3, 5);