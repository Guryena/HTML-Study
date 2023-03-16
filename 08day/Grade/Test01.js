//국영수 입력 받아 총점과 평균을 출력 하되 grade 객체를 만들어 결과물을 내시오
let inputKor = prompt('kor grade' ,'grade');
let inputEng = prompt('eng grade' ,'grade');
let inputMath = prompt('math grade' ,'grade');

let grade = {
    KOR : console.log(inputKor + "점<br>"),
    Eng :console.log(inputEng + "점<br>") ,
    Math : console.log(inputMath + "점<br>") ,
    total : function sumGrade(grade) {
        return grade();
    },
    avgGrade : function Avg(grade) {
        let avg = grade() /3;
        return avg;
    }
};

function Sum() {
  let sum = Number(inputKor) +Number(inputEng) + Number(inputMath);
  return sum;
}

// function Avg(SUM) {
//     let avg = SUM() /3;
//     return avg;
// }

with(grade){
console.log(total(Sum));
console.log(avgGrade(Sum));
};