class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement){
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){

    }

    appendNumber(number){
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOpration(operation){
        if(this.operation == '*'){

        }
    }

    compute(){

    }

    updateDisplay(){
        this.currentOperandTextElement.innerText  = this.currentOperand
    }
}

const numButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operand]')
const dataAllClear = document.querySelector('[data-allclear]')
const equalButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

// event listener logic for the number buttons
numButtons.forEach (button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})


// event listener logic for the operation buttons
operationButtons.forEach (button => {
    button.addEventListener('click', () => {
        calculator.chooseOpration(button.innerText)
        calculator.updateDisplay()
    })
})