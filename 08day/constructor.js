//생성자 함수를 만드는 방법
function Stock(name, price) {
    this.company = name;
    this.cost = price;
    this.showPrice = function () {
        console.log(this.cost);
    }
    // return this; //= let Stock = {}; 와 같이 만드는 형태
}

const samsung = new Stock("삼성전자", 43750);
console.log(samsung.company);
console.log(samsung.cost);

function Grade(Kor, Eng, Math) {
    this.Kor = Kor;
    this.Eng = Eng;
    this.Math = Math;
    this.Sum = function () {
        let sum = this.Kor + this.Eng + this.Math;
        return sum;
    }
    this.Avg = function () {
        let avg = this.Sum()/3;
        return avg;
    }
}
const grade = new Grade(30, 60, 90);
console.log(grade.Sum());
console.log(grade.Avg());
