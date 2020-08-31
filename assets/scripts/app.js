const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; //logs array

//getting input from user input
function getUserNumberInput() {
  let val= parseInt(usrInput.value)
  return val;
}

//generates and write calculation log and result
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  if(usrInput.value==""){
    currentResult=0;
    calcNumber=0;
  }
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor.js
}

//writing log common function
function writeToLog(
  operationIndentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIndentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntry.operation);
  console.log(logEntries.reverse());
}

function add( ) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult + enteredNumber;
  createAndWriteOutput("+", initialResult, enteredNumber);
  writeToLog('ADD',initialResult,enteredNumber,currentResult)
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createAndWriteOutput("-", initialResult, enteredNumber);
  writeToLog('SUBTRACT',initialResult,enteredNumber,currentResult)
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createAndWriteOutput("*", initialResult, enteredNumber);
  writeToLog('MULTIPLY',initialResult,enteredNumber,currentResult)
}

function devide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createAndWriteOutput("/", initialResult, enteredNumber);
  writeToLog('DEVIDE',initialResult,enteredNumber,currentResult)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", devide);

// const additionResult= add(1,20)

// currrentResult = defaultResult;
// let calculationDescription = "(" + defaultResult+"+10)"
//how u can use backticks and show varNames using doolor $ sign and curlybraces {}
// let calculationDescription = `(  ${defaultResult} + 10)`;

// let errorMesage= 'an error\n' +
//                     'coocured';


document.getElementById('reset-btn').addEventListener('click',reset)

function reset() {
  usrInput.value="";
  currentResultOutput.innerText="Result";
  currentCalculationOutput.innerText="Description"
}
