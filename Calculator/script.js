// Remember to console log test each function. 

// Global variables - to link HTML elements 
const buttons = document.querySelectorAll('button') 
const display = document.querySelector('.number-on-screen') 

// Global variables - empty string variables that can be filled in
let numberStored = '' 
let operatorStored = '' 
let newInput = false
let didEquals = false 


// Function to assign our calculation to the variable numberStored
function storeCalc(operator) { // 
  if (!numberStored) { 
    numberStored = display.textContent 
  }
  else { 
    numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
  } // ENDS else 
  
  operatorStored = operator 
  newInput = true 
  didEquals = false 

}
// Calculations - Parent function 
function operate(a, operator, b) {
  if (operator == '+') {
    return add(a, b)  
  }
  else if (operator == '-') {
    return subtract(a, b)
  }
  else if (operator == 'x') {
    return multiply(a, b) 
  }
  else if (operator == '÷') {
      return divide(a, b)
    } 
  else {
    return null; 
  } 
} 

//// TEST function operate(a, operator, b) 
  console.log(operate(10, '/', 2));
//// 5


  // Calculation - Sub functions 
  function add(a, b) {
    return a + b
  }

  function subtract(a, b) {
    return a - b
  }

  function multiply(a, b) {
    return a * b
  }

  function divide(a, b) {
    return a / b
  }


// Reset function - to update back to blank string, and display with 0 
function clear() {
  display.textContent = 0 
  numberStored = '' 
  operatorStored = ''
}


// Function addToDisplay gets called in our buttons.forEach function
function addToDisplay(number) {
  let displayNum = display.textContent 
  if(newInput) { 
    newInput = false 
    setDisplay(number) 
  }
  else if (displayNum == 0) {  
    setDisplay(number) 
  }
  else {
    if (displayNum.includes('e')) { 
      displayNum = Number(displayNum); 
    }  
    
    displayNum = displayNum + number
    setDisplay(displayNum)
    
  } 
}


  // Function in case if number exceeds our display, converts to exponential notation form.
  function setDisplay(displayNum) { 
    displayNum = displayNum.toString()

    if (displayNum.length > 9) { 
      displayNum = parseFloat(displayNum) 
      displayNum = displayNum.toExponential(2) 
    } 
    
    display.textContent = displayNum; 
  }


// Function to register our buttons event from HTML to JavaScript 
buttons.forEach(button =>{ 
    button.addEventListener('click', function(){ 
        let input = this.textContent 
        
        // 1st IF SCENARIO - to check if any of our entered button inputs match regex digits 
        if (/\d/.test(input)) { 
 
            if (didEquals) { 
                setDisplay(input) 
                didEquals = false 
            } 
            else { 
            addToDisplay(input)
            }
        } 
        else if (input == 'AC') { 
            clear() 
        } 
        else if (input == '=') {
          
            if (!numberStored || !operatorStored) { 
                alert('Error: no operation entered. Clearing data')
                clear() 
            }
            else { 
                numberStored = operate(Number(numberStored), operatorStored, Number(display.textContent))
                operatorStored = '' 
              
                setDisplay(numberStored) 
                numberStored = ''
                didEquals = true 
            }
        } 
        else { 
            storeCalc(input) 
        } 
    }) 
}); 