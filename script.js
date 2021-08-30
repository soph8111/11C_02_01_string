"use strict";

// Opretter variabler
const input = document.querySelector("#inputID");
const dropdown = document.querySelector("#dropdown");
const output = document.querySelector("#output");
const button = document.querySelector("#button");
let newInput;

window.addEventListener("DOMContentLoaded", start());

function start() {
  // eventlistner på knap
  button.addEventListener("click", clickButton);
}

function clickButton() {
  console.log("clickButton");
  readInput();
}

function readInput() {
  console.log("readInput: " + input.value);

  readDropdown();
}

function readDropdown() {
  console.log("Drop down value: " + dropdown.value);
  if (dropdown.value === "0") {
    // If input is a first name: Make the first character in a name uppercase, and the rest lowercase
    newInput = input.value.substring(0, 1).toUpperCase() + input.value.substring(1).toLowerCase();
    console.log(newInput);
  } else if (dropdown.value === "1") {
    // If input is a full name: Find the first name
    newInput = input.value.substring(input.value.indexOf(" "), input.value.substring(input.value.lastIndexOf(" ")));
    console.log(newInput);
  } else if (dropdown.value === "2") {
    // If input is a full name: Find the length of the first name
    newInput = input.value.substring(input.value.indexOf(" "), input.value.substring(input.value.lastIndexOf(" ")));
    console.log(newInput.length);
  } else if (dropdown.value === "3") {
    // If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string
    newInput = input.value.substring(input.value.indexOf(" ") + 1, input.value.lastIndexOf(" "));
    console.log(newInput); // MANGLER POSITIONS
  } else if (dropdown.value === "4") {
    // If input is a filename: Check if a filename is .png or .jpg
    if (input.value.endsWith(".jpg") || input.value.endsWith(".png")) {
      newInput = "Yes";
    } else {
      newInput = "No";
    }
    console.log(newInput);
  } else if (dropdown.value === "5") {
    // If input is a password: Hide a password with the correct number of *s
    const howMany = input.value.length;
    const hideAll = input.value.slice(howMany);
    newInput = hideAll.padStart(input.value.length, "*");
    console.log(newInput);
  } else if (dropdown.value === "6") {
    // With any input: Make the third character uppercase
    newInput = input.value.substring(0, 2).toLowerCase() + input.value.substring(2, 3).toUpperCase() + input.value.substring(3).toLowerCase();
    console.log(newInput);
  } else {
    // With any input: Make a character uppercase, if it follows a space or a hyphen
    const findSpace = input.value.substring(input.value.indexOf(" ") + 1);
    console.log(findSpace);
    newInput = findSpace.substring(0, 1).toUpperCase() + findSpace.substring(1).toLowerCase();
    console.log(newInput);
  }

  writeResult();
}

function writeResult() {
  console.log("writeResult");
  document.querySelector("#output").innerHTML = newInput;
}
