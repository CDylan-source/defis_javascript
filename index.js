var click = 0;

function ClickCounter() {
    click = click + 1;
}

function changeColor(x, y, z) {
    
    if (click % 2 == 0){
        document.getElementById("button").style.background = x;
    }
    else if (click % 5 == 0){
        document.getElementById("button").style.background = z;
    }
    else {
        document.getElementById("button").style.background = y;
    }
    
}