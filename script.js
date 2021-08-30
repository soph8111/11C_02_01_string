"use strict";

// Opretter variabler
const input = document.querySelector("#inputID");
const dropdown = document.querySelector("#dropdown");
const output = document.querySelector("#outpu");
const button = document.querySelector("#button");

window.addEventListener("DOMContentLoaded", start);

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
  console.log("readDropdown");
  if (dropdown.value === "0") {
      // If input is a first name: Make the first character in a name uppercase, and the rest lowercase

  } else if (dropdown.value === "1") {
      //If input is a full name: Find the first name
  
  } else if (dropdown.value === "2") {
      //If input is a full name: Find the length of the first name

  } else if (dropdown.value === "3") {
      // If input is a full name: Find the middle name start and end position, and the middle name itself in a full name string

  } else if (dropdown.value === "4") {
      // If input is a filename: Check if a filename is .png or .jpg

  } else if (dropdown.value === "5") {
      // If input is a password: Hide a password with the correct number of *s

  } else if (dropdown.value === "6") {
      // With any input: Make the third character uppercase

  } else (dropdown.value === "7") {
      // With any input: Make a character uppercase, if it follows a space or a hyphen

  }
}

  writeResult();
}

function writeResult() {
  console.log("writeResult");
}
