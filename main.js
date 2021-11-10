// Main JS File

let inputan1;
let inputan2;
let hitung;

function operate() {
  inputan1 = parseInt(document.getElementById("input1").value);
  inputan2 = parseInt(document.getElementById("input2").value);
  let result;

  if (hitung == "penjumlahan") {
    result = parseInt(inputan1 + inputan2);
  } else if (hitung == "pengurangan") {
    result = parseInt(inputan1 - inputan2);
  } else if (hitung == "perkalian") {
    result = parseInt(inputan1 * inputan2);
  } else {
    result = parseInt(inputan1 / inputan2);
  }

  
  console.log(result);
  alert(result);
}

function setValue() {
  hitung = document.getElementById("aritmatik").value;
}

function init() {
  let button = document.getElementById("submit");
  button.onclick = operate;
}

