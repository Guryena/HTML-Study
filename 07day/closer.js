function funName(x) {
    var varName = x +"단"
    return function(){
        document.write("<br>" + varName);
        for (let i = 1; i < 10; i++) {
            console.log(x + " * " + i + " = " + (x*i));
            document.write("<br>" + x + " * " + i + " = " + (x*i));
        }
    }
}

var func = funName(5);
func();