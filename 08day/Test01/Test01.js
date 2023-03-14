function Grade(kor, eng, math) {
this. kor = kor;
this.eng = eng;
this. math = math;
this.sum = function Sum() {
    return this.kor+this.eng +this.math;
}
this.avg = function Avg() {
    return this.sum() /3;
}
}


const 우림 = new Grade(50, 10, 25);
const 지우 = new Grade(50, 40, 30);

    console.log(우림.sum());
    console.log(우림.avg());
    console.log(지우.sum())
    console.log(지우.avg());
