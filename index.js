const {
    Input
} = require("postcss");

var click = 0;

function ClickCounter() {
    click = click + 1;
}

function changeColor(x, y, z) {

    if (click % 2 == 0) {
        document.getElementById("button").style.background = x;
    } else if (click % 5 == 0) {
        document.getElementById("button").style.background = z;
    } else {
        document.getElementById("button").style.background = y;
    }

};

function Validate() {
    var name_entered = document.getElementById("nom")
    if (!name_entered.checkValidity()) {
        document.getElementById('false').innerHTML = 'Wrong name !';
    } else {
        document.getElementById('false').innerHTML = 'Message envoyé !';
        document.getElementById("nom").className = "valide";


    }
}

//var name_entered = document.getElementById("nom").value;
        //alert("Bonjour" + " " + name_entered + " !");