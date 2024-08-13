function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width="0";
}
function clearScreen() {
        document.getElementById("result").value = "";
    }
    function display(value) {
         document.getElementById("result").value += value;
    }
    function calculate() {
        var p = document.getElementById("result").value;
        var q = eval(p);
        document.getElementById("result").value = q;
    }