//onload로 마지막에 실행시키면 실행가능
window.onload = function () {
    
    let elementNode = document.createElement("p"); //<p>text</p> =>tag생성문
    let textNode = document.createTextNode("javascript & node.js"); //javascript &amp; node.js;
    
    elementNode.appendChild(textNode); //<p>javascript &amp; node.js</p>
    document.body.appendChild(elementNode); //body보다 먼저 선언되면 존재하지 않는 메모리이기에 실행불가


    var str = "";
    str += "<p id='jsTitle'> javascript & node.js </p>";
    str += "<img id='logoImg', src='logo.png',";
    str += "width='170', height='67', tempData='logoImg'>";

    document.body.innerHTML = str;

    // let name = document.getElementById("name");
    // console.log(name);
    // name.innerText = "hi";

    // let imgNode = document.createElement("img");
    // imgNode.src = "logo.png";
    // imgNode.width = "170";
    // imgNode.height = "67";

    // document.body.appendChild(imgNode);


    let titleNode = document.getElementById("jsTitle");
    titleNode.innerHTML ="<h1>JS & node</h1>";

    let logoNode = document.getElementById("logoImg");
    logoNode.setAttribute("src", "arm_mbed.png");
    logoNode.setAttribute("width", 297);
    logoNode.setAttribute("height", 124);

    document.body.appendChild(logoNode);
    
};