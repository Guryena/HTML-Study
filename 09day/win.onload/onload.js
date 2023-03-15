window.onload = function () {
    let str = "";
    str += "<p id='jsTitle'> javascript & node.js</p>";
    str += "<img id ='logoImg', src = 'logo.png', ";
    str += "width = '170', height='67', tempData='logoImg'>";

    document.body.innerHTML = str;

    let titleNode = document.getElementById("jsTitle");
    titleNode.style.fontSize = "1.2em";
    titleNode.style.border = "1px solid #ff0000";
    // titleNode.parentNode.removeChild(titleNode);


    let logNode = document.getElementById("logoImg");
    logoNode.style.width = "170px";
    logoNode.style.height = "67px";

    logNode.parentNode.removeChild(logoNode);
}