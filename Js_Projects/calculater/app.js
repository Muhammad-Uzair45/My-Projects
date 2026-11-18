const display = document.getElementById("display");
const buttonsContainer = document.querySelector(".buttons");

let currentInput = "";
let shouldReset = false;

   // Event Delegation

buttonsContainer.addEventListener( "click", (e)=>{
    const btn = e.target.closest("button");
    if (!btn) return;

    const value = btn.dataset.value;
    const action = btn.dataset.action;
    if (action === "clear") return clearDisplay();
    if (action === "delete") return deleteLast();
    if (action === "calculate") return calculate();

    if (value) appendvalue(value);
});

// Append value

function appendvalue(value){
    if (shouldReset){
        currentInput = "";
        shouldReset = false;
    }
    const lastChar = currentInput.slice(-1)
    const operators = ["+","-","*","/",".","%"];
    if (operators.includes(value) && operators.includes(lastChar)) return;
    currentInput += value;
    display.value = currentInput;

}

// clear display

function clearDisplay(){
      currentInput="";
      display.value="";
 
}

// Delete lastChar

function deleteLast(){
    currentInput = currentInput.slice(0,-1);
    display.value  = currentInput;
}

//calculate

function calculate() {
    try {
        const result = Function(`"use strict"; return (${currentInput})`)();

        display.value = result;

        currentInput = String(result);

        shouldReset = true;

    } catch {
        display.value = "Error";
        currentInput = "";
    }
}