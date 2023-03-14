setInterval(() => {
    let timer = new Date();
    let h = timer.getHours();
    let m = timer.getMinutes();
    let s = timer.getSeconds();

    document.body.innerHTML = "<h1>" + String(h) + " : " + String(m) + " : " + String(s);
    document.write("<h1>" + h + " : " + m + " : " + s);
}, 1000);