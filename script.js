let lat;
let proc = "%";
let btns = document.getElementById("btns");
let btnd = document.getElementById("btnd");
let msg = document.getElementById("msg");

let votStanga = 30;
btns.innerHTML = votStanga;

function stanga() {
     votStanga++;
     btns.innerHTML = votStanga;
     lat = (votStanga / (votDreapta + votStanga)) * 100;
     document.getElementById("wdth").style.width = lat + proc;
     if (lat > 58) {
          msg.innerHTML = "It looks like the red team might win!";
     }
}

let votDreapta = 30;
btnd.innerHTML = votDreapta;

function dreapta() {
     votDreapta++;
     btnd.innerHTML = votDreapta;
     lat = (votStanga / (votDreapta + votStanga)) * 100;
     document.getElementById("wdth").style.width = lat + proc;
     if (lat < 42) {
          msg.innerHTML = "It looks like the blue team might win!";
     }
}
