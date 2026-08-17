const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let generateBtn = document.getElementById("generate-btn");
let firstPass = document.getElementById("left-pass");
let secondPass = document.getElementById("right-pass");
let isClear = true;

function generate() {
  firstPass.textContent = "";
  secondPass.textContent = "";
  for (let i = 0; i < 15; i++) {
    //console.log(i);
    let randomNum1 = Math.floor(Math.random() * characters.length);
    let randomNum2 = Math.floor(Math.random() * characters.length);
    firstPass.textContent += characters[randomNum1];
    secondPass.textContent += characters[randomNum2];
  }
}
firstPass.addEventListener("click", function () {
  let password = firstPass.textContent;
  navigator.clipboard.writeText(firstPass.textContent);
  firstPass.textContent = "Copied!";
  setTimeout(function () {
    firstPass.textContent = password;
  }, 1000);
});

secondPass.addEventListener("click", function () {
  let password = firstPass.textContent;
  navigator.clipboard.writeText(secondPass.textContent);
  secondPass.textContent = "Copied!";
  setTimeout(function () {
    secondPass.textContent = password;
  }, 1000);
});
