let objCar = {
    width : "3m",
    height : "2m",
    cc : "2000cc",
    energy : 100,
    speed : function speed(power){
        return this.energy *power;
    }
};

console.log("objCar.speed : " + objCar.width);
console.log("objCar.speed : " + objCar.speed(2));
