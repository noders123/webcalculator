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
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number){
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    getDisplayNumber(number){
        const floatNumber = parseFloat(number)
        if (isNaN(floatNumber)) return ''  
    }


    chooseOpration(operation){
        if(this.currentOperand === '' ) return
        if(this.previousOperand !== ''){
            this.compute()
        }
        this.operation = operation
        this.currentOperand = this.currentOperand.toString() + ' ' + operation.toString()
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    compute(){
        let computation
        const prev = parseFloat(this.previousOperand) //converts string to a floating number points
        const current = parseFloat(this.currentOperand) //converts string to a floating number points
        if(isNaN(prev) || isNaN(current)) return
        switch(this.operation){
            case '+':
                computation = prev + current
                break
            
            case '-':
                computation = prev - current
                break

            case '%':
                computation = prev / current
                break
            
            case '*':
                computation = prev * current
                break
            
                default:
                    return
        }

    this.currentOperand = computation
    this.operation = undefined
    this.previousOperand = ''
    }

    updateDisplay(){
        this.currentOperandTextElement.innerText = this.currentOperand
        this.previousOperandTextElement.innerText = this.previousOperand
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

// event listener logic for the 'AllClear' button
dataAllClear.addEventListener('click', () => {
    calculator.clear()
    calculator.updateDisplay()
})

// event listener logic for the 'equals' button
equalButton.addEventListener('click', () => {
        calculator.compute()
        calculator.updateDisplay()
    })


// event listener logic for the 'Delete' button
deleteButton.addEventListener('click', () => {
    calculator.delete()
    calculator.updateDisplay()
})

