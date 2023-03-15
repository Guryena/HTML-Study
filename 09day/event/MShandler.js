window.onload = function () {
    function addHandler() {
      console.log("click!!");
    }

    function removeHandler() {
      console.log("event remove!!");
      ceA.removeEventListener("click", addHandler);
    }

    var ceA = document.getElementById("cEventAdd");
    ceA.addEventListener("click", function addHandler() {
      console.log("click!!");
    });

    var ceR = document.getElementById("cEventRem");
    ceR.addEventListener("click", removeHandler);
  };
