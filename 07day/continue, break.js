var varResult = 0;
for (let i = 0; i < 10; i++) {
    if (i % 2 ==0 || i %3 ==0) {
        continue;
    }
    document.write("i : " + i);
    varResult += i;
    console.log(varResult);
}

var Num = 0;
var Sum = 0;
while (Num < 10) {
    console.log("Num : "+Num);
    Sum += Num;
    Num++;

    if (Sum > 20) {
        console.log("Sum : " + Sum);
        break;
    }
}

for (var i = 0; true; i++) {
    console.log("i : " + i);
    if (i>50) {
        break;
    }
    
}