window.onload = function () {
    let ce = document.getElementById("cEvent");

    //method 1
    ce.onclick = function () {
        console.log("click");

        // //remove event
        // ce.onclick = null;
    }


    //method 2
    ce.onclick = clickEventHandler;

    function clickEventHandler() {
        console.log("clickEventHandler");

        // //remove event
        // ce.onclick=null
    }
}