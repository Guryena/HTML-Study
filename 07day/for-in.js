var varArr = [1, 2, 3, 4, 5];
for (let i = 0; i < varArr.length; i++) {
    console.log("varArr[" + i + "] : " + varArr[i]);
}

for (var i in varArr) {
    console.log("varArr[" + i + "] : " + varArr[i]);
    }