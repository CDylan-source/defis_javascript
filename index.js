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
    var re = new RegExp("^[a-zA-ZéèàêëÉÈÀçÇÊË]*$");
    if (re.test(name_entered.value)) {
        document.getElementById('false').innerHTML = 'Message envoyé !';
        document.getElementById("nom").className = "valide";
        document.getElementById('false').className = "valide-txt"

    } else {
        document.getElementById('false').innerHTML = 'Wrong name !';
         document.getElementById('false').className = "faux-txt"
         document.getElementById("nom").className = "faux";

    }
}

//var name_entered = document.getElementById("nom").value;
        //alert("Bonjour" + " " + name_entered + " !");