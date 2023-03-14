let objName = {
    name : "Lee sun sin",
    nation : "Korea",
    gender : "men",
    character : "good"
};

//속성 출력
let print = "";
for (const key in objName) {
        print += key + " : " + objName[key] + "\n"
    }
console.log(print);

//속성 추가
objName.talent = "fencing";
print = "";
for (const key in objName) {
    print += key + " : "+ objName[key] + "\n";
};
console.log(print);

//속성 삭제
delete(objName.talent);
//delete objName.talent;
print = "";
for (const key in objName) {
    print += key + " : " + objName[key] + "\n";
};
console.log(print);

//in 키워드 :  존재 여부
console.log("nation" in objName);
console.log("age" in objName);

//with 키워드 : 키워드 생략
with(objName){
    console.log("name : " +name);
    console.log("nation : " +nation);
    console.log("gender : " +gender);
    console.log("character : " +character);
}
