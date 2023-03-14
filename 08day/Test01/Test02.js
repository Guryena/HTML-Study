const lotto = new Array[6];

for (let i = 0; i < lotto.length; i++){
    lotto[i] = Math.floor(Math.random()*45+1);
    for (let j = 0; j < i; j++) {
        if (lotto[i]==lotto[j]) {
            i--;
            continue;
        }
        console.log(lotto[i]);
    }
}