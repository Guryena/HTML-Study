window.open(
    "http://www.google.com",
    "openWindow",
    "width=800, height = 800"
);

let newWindow = window.open("http://www.google.com",
"openWindow",
"width=800, height = 800");

 //위치 조정
 newWindow.moveTo(50, 50);
 for(var i=0; i<1000; i++) {
    newWindow.moveBy(1, 1);
 }
 
 //사이즈 조정
 newWindow.resizeTo(500, 600);
 for(var i=0; i<200; i++) {
    newWindow.resizeBy(-1, -1);
 }
