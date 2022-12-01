const inputEl = document.querySelector("#input")
const outputEl = document.querySelector("#output")
const increase = document.querySelector("#inc")
const decrease = document.querySelector("#dec")


increase.addEventListener("click", addition );
decrease.addEventListener("click", subtraction);

let sizeFont = 20;
inputEl.style.fontSize = `${sizeFont}px`;

function addition (add){
  output.innerText = inputEl.value;
  if (add) {
    sizeFont += 2;



    output.style.fontSize = `${sizeFont}px`;
  }

};





function subtraction(sub) {
    output.innerText = inputEl.value;
    if (sub) {
      sizeFont -= 2;
  
      output.style.fontSize = `${sizeFont}px`;
    }
  
  };
  





