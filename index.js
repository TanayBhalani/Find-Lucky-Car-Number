// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');

function allDigitTotal(start, end, total, excludeDigit = []) {
  const validNumbers = [];
  for (let num = start; num <= end; num++) {
    const isValid = digitSumMatch(num, total, excludeDigit);
    if (isValid) {
      validNumbers.push(num);
    }
  }
  return validNumbers;
}
function digitSumMatch(num, total, excludeDigit) {
  let isSumMatch = false;
  //   does it have digits suppose to be exclueded
  if (numHasDigit(num, excludeDigit)) {
    isSumMatch = false;
  } else {
    //   Check sum of digits is equal to total
    isSumMatch = checkDigitTotal(num, total);
  }
  return isSumMatch;
}
function numHasDigit(num, excludeDigit = []) {
  let isDigitPresent = false;
  let numToString = [...num.toString()];

  for (let digit of excludeDigit) {
    if (numToString.includes(`${digit}`)) {
      isDigitPresent = true;
      break;
    }
  }
  return isDigitPresent;
}
function checkDigitTotal(num, total) {
  let totalLength = [...total.toString()].length;
  let numLength = [...num.toString()].length;
  let isMatch = false;

  if (numLength <= totalLength) {
    return isMatch;
  }
  let digitTotal = [...num.toString()].reduce(
    (sum, curr) => (sum += Number(curr)),
    0
  );
  if (digitTotal === total) {
    isMatch = true;
  } else {
    isMatch = checkDigitTotal(digitTotal, total);
  }
  return isMatch;
}
document.readyState;
//	Find number where sum of digit is 9
let start = document.getElementById('start').value;
let end = document.getElementById('end').value;
let total = document.getElementById('total').value;
let allNums = allDigitTotal(start, end, total);
printToHTML(allNums);

console.log(allNums);
function printToHTML(allNums) {
  appDiv.innerHTML = `<h1>JS Starter</h1>`;
  allNums.forEach((num) => {
    let li = document.createElement('div');
    li.innerText = num;
    appDiv.appendChild(li);
  });
}
