const calcNums = document.querySelectorAll(".calc-btn-num");
const calcOperators = document.querySelectorAll(".calc-btn-operator");

const clearBtn = document.getElementById("calc-clear");
const backspaceBtn = document.getElementById("calc-backspace");
const decimalBtn = document.getElementById("calc-decimal");
const displayValElement = document.getElementById("calc-display-val");

var displayVal = '0';
var pendingVal;
var evalStringArray = [];


function updateDisplayVal(clickObj){
    var numText = clickObj.target.innerHTML;
    if (displayVal === '0')
        displayVal = '';
    displayVal += numText;
    displayValElement.innerHTML = displayVal;
    
}

function performOperation(clickObj){
    // console.log(clickObj.target.innerHTML);
    var operator = clickObj.target.innerHTML;
    switch (operator) {
        case '÷':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('/');
            break;
        case 'x':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('*');
            break;
        case '-':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('-');
            break;
        case '+':
            pendingVal = displayVal;
            displayVal = '0';
            displayValElement.innerHTML = displayVal;
            evalStringArray.push(pendingVal);
            evalStringArray.push('+');
            break;
		case '=':
			evalStringArray.push(displayVal);
            var evaluation = eval(evalStringArray.join(' ')); // ['5', '+' , '5'] -> 5+5
            displayVal = String(evaluation);
            displayValElement.innerHTML = displayVal;
            evalStringArray = [];
			break;
        default:
            break;
    }
}

for (let i=0; i<calcNums.length; i++){
    calcNums[i].addEventListener("click", updateDisplayVal);
}

for (let i=0; i<calcOperators.length; i++){
    calcOperators[i].addEventListener("click", performOperation);
}

clearBtn.addEventListener("click", function(){
    displayVal = '0';
    pendingVal = undefined;
    evalStringArray = [];
    displayValElement.innerHTML = displayVal;

}); 

backspaceBtn.addEventListener("click", function(){
    displayVal= displayVal.slice(0, -1);
    if (displayVal === '')
        displayVal = '0';
    displayValElement.innerHTML = displayVal;
});

decimalBtn.addEventListener("click", function(){
    if (!displayVal.includes("."))
        displayVal += ".";
    displayValElement.innerHTML = displayVal;
});