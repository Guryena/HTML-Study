window.onload = function () {

    function buttonEvent() {
        let objN1 = document.getElementById("num1").value; //id값 찾아와 value를 저장
        let objN2 = document.getElementById("num2").value;
        let result = Number(objN1) + Number(objN2);
        
        document.getElementById("result").innerHTML = result;
        
    };
    
    let objB = document.getElementById("add");
   
    objB.addEventListener("click", buttonEvent);
    
};