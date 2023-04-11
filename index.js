"use strict";

// Collecting values
let billInput = document.querySelector(".bill-input");
let numberInput = document.querySelector(".number-input");
let tipPerPerson = document.querySelector(".tip-per-person");
let tipTotal = document.querySelector(".tip-total");

let tipPerPersonValue = Number(tipPerPerson.innerText || 0);
let tipTotalValue = Number(tipTotal.innerText || 0);

function tippingHandler(tip) {
  let billValue = Number(billInput.value);
  let personCount = Number(numberInput.value);
  // if (!billValue || !personCount) {
  //   console.log("Fill the input fields");
  //   Toastify({
  //     text: "Fill the input fields",
  //     duration: 3000,
  //     destination: "https://github.com/apvarun/toastify-js",
  //     newWindow: true,
  //     close: true,
  //     gravity: "bottom", // `top` or `bottom`
  //     position: "center", // `left`, `center` or `right`
  //     stopOnFocus: true, // Prevents dismissing of toast on hover
  //     style: {
  //       background: "linear-gradient(to right, #00b09b, #96c93d)",
  //     },
  //     onClick: function () {}, // Callback after click
  //   }).showToast();
  //   return;
  // }

  const tipPercent = tip / 100;

  const calculatedTip = billValue * tipPercent;

  tipPerPersonValue = calculatedTip / personCount;
  tipTotalValue = (calculatedTip + billValue) / personCount;

  tipPerPerson.innerText = tipPerPersonValue.toFixed(2);
  tipTotal.innerText = tipTotalValue.toFixed(2);
}
const customInput = document.querySelector("#custom");

function getTipCustom() {
  let tipCustom = Number(customInput.value);
  return tipCustom;
}

function reset() {
  billInput.value = null;
  numberInput.value = null;
  tipPerPerson.innerText = null;
  tipTotal.innerText = null;
  customInput.value = null;
}
