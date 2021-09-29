let lat;
let proc = "%";
let btns = document.getElementById("btns");
let btnd = document.getElementById("btnd");
let msg = document.getElementById("msg");
let cont1 = document.getElementById("cont1");
let cont2 = document.getElementById("cont2");
let forms = document.getElementById("forms");
let formd = document.getElementById("formd");

let votStanga = 30;
btns.innerHTML = votStanga;

function stanga() {
     votStanga++;
     btns.innerHTML = votStanga;
     lat = (votStanga / (votDreapta + votStanga)) * 100;
     document.getElementById("wdth").style.width = lat + proc;
     if (lat > 58) {
          msg.innerHTML = `"It looks like the ${cont1.innerHTML} team might win!"`;
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
          msg.innerHTML = `"It looks like the ${cont2.innerHTML} team might win!"`;
     }
}

function addCont() {
     if (forms.value === "" || formd.value === "") {
          alert("Please add contestants!");
          return;
     }
     cont1.innerHTML = forms.value;
     cont2.innerHTML = formd.value;
     document.getElementById("forms").value = "";
     document.getElementById("formd").value = "";
     votDreapta = 30;
     btnd.innerHTML = "30";
     btns.innerHTML = "30";
     votStanga = 30;
     document.getElementById("wdth").style.width = "50%";
}

// let arr = ["manusaa", "caciula", "fular"];

// let arrText = document.getElementById("arrText");

// arrText.innerHTML = arr;

// function pp() {
//                if (document.getElementById("arrInput").value === "") {
//                     alert("qwe");
//                     return
//                }
//      let arrInput = document.getElementById("arrInput").value;
//      arr.push(arrInput);
//      arrText.innerHTML = arr;
//      console.log(arr);
//      document.getElementById("arrInput").value = "";

// }
