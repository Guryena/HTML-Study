setInterval(() => {
    let timer = new Date();
    let h = timer.getHours();
    let m = timer.getMinutes();
    let s = timer.getSeconds();
    document.body.innerHTML = String(h) +" : "+String(m)+ " : " + String(s);
}, 1000);