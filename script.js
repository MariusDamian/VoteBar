let lat;
let proc = "%";
let btns = document.getElementById("btns");
let btnd = document.getElementById("btnd");

let votStanga = 50;
btns.innerHTML = votStanga;

function stanga() {
     votStanga++;
     btns.innerHTML = votStanga;
     lat = (votStanga / (votDreapta + votStanga)) * 100;
     document.getElementById("wdth").style.width = lat + proc;
}

let votDreapta = 50;
btnd.innerHTML = votDreapta;

function dreapta() {
     votDreapta++;
     btnd.innerHTML = votDreapta;
     lat = (votStanga / (votDreapta + votStanga)) * 100;
     document.getElementById("wdth").style.width = lat + proc;
}
