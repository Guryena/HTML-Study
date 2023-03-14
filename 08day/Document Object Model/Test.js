window.onload = function () {
    let str = "";
    str += "<img id = 'logoImg', src = 'logo.png', "
    str += "width='170', height='67', tempData='logoImg'>";

    document.body.innerHTML = str;

    let logoNode = document.getElementById("logoImg");
    
    let changeImg = setInterval(() => {
        logoNode.setAttribute("src", "arm_mbed.png");
        document.body.appendChild(logoNode);    
    }, 3000);
}