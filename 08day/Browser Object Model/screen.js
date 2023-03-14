function openWin(url, width, height) {
         
    //해상도 출력
    console.log("screen.width : " + screen.width);
    console.log("screen.height : " + screen.height);
    
    
    //화면의 중앙에 위치하는 로직
    var left = screen.width/2 - width/2;
    var top = screen.height/2 - height/2;
    var opt = "width = " + width + ", height = " + height + ", left = " + left + ", top = " + top;
    
    open(url, "newWin", opt);
 
}
 
openWin("https://yahoo.com", 800, 500);