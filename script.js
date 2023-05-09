class Calculator {
    constructor(){
    this.previousOperandTextElement = previousOperandTextElement
    this.CurrentOperandTextElement = CurrentOperandTextElement
    }
    clear(){

    }

    delete(){

    }

    appendNumber(){
        
    }
}

const numButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operand]')
const  dataAllClear = document.querySelector('[data-allclear]')
const  equalButton = document.querySelector('[data-equals]')
const  deleteButton = document.querySelector('[data-delete]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const CurrentOperandTextElement = document.querySelector('[data-Current-operand]')

console.log(numButton)