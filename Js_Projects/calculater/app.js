const display = document.getElementById("#display");
const buttonsContainer = document.querySelector(".buttons");

let currentInput = "";
const shouldReset = false;

buttonsContainer.addEventListener( "click", (e)=>{
    const btn = e.target.closest("button");
    if (!btn) return;

    const value = btn.dataset.value;
    const action = btn.dataset.action;

});

function clearDisplay(){
      currentInput="";
      display.value="";
 
}

function deleteLast(){
    currentInput = display.value  sl
}