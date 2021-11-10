var num = 1;
var p1 = 0;
var p2 = 0;

function roll() {
    var x = parseInt((Math.random() * 10 % 6) + 1);
    document.getElementById("num").value = x;
    if (num === 1) {
        p1 = p1 + x;
        document.getElementById("pl1").value = p1;
        num = 2;
    } else if (num === 2) {
        p2 = p2 + x;
        document.getElementById("pl2").value = p2;
        num = 1;
    }
    if (p1 >= 30) {
        document.getElementById("p1").innerHTML = "Player 1 is the winner!";
    } else if (p2 >= 30) {
        document.getElementById("p1").innerHTML = "Player 2 is the winner!";
    }
}