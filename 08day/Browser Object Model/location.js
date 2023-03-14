//페이지 이동
window.onload = function () {
    //새로운 페이지(히스토리 기록)
    location.href = "http://naver.com";

    //기존페이지를 새로운 페이지로 변경(히스토리 기록)
    location.assign("http://naver.com");

    //기존페이지를 새로운 페이지로 변경(히스토리 기록안됨)
    location.replace("http://naver.com");
}