var customHeader = "something";
var heading = document .querySelector(`h1`);
heading .textContent = customHeader;

var number1 = 2;
var number2 = 3;
var text = "fancy shitt";

var myList = ["one", "two", "three"]
var myObject = {};

function multyplyByTwo(n1, n2){
    var val = n2 + n1;
return val * 2;
}

function addText(){
    var el = document.getElementById("textChange");

    if (el.innerHTML === "rofl"){
        el.innerHTML = null ;
    }
    else { 
        el.innerHTML = "rofl"
    }
}
