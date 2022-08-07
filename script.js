let Fcalc = document.querySelector('#input')
let Currents = 0 //// numbers
let newNumber = false //if no numbers-false, if we have numbers - true
let stringOfNumbers = '' ///starts with empty string without letters('2')

//Insert numbers
const insert = (num) => {
  if (newNumber) {
    Fcalc.value = num
    newNumber = false
  } else {
    if (Fcalc.value == '0') {
      Fcalc.value = num
    } else {
      Fcalc.value += num
    }
  }
}
///
const Operation = (operation) => {
  let display = Fcalc.value

  if (newNumber && stringOfNumbers != '=') {
    Fcalc.value = Currents
  } else {
    newNumber = true
    switch (stringOfNumbers) {
      case '+':
        Currents += parseFloat(display)
        break
      case '-':
        Currents -= parseFloat(display)
        break
      case '/':
        Currents /= parseFloat(display)
        break
      case '*':
        Currents *= parseFloat(display)
        break
      default:
        Currents = parseFloat(display)
    }
    Fcalc.value = Currents
    stringOfNumbers = operation

    // Second version with if statement

    //   if ('+' == stringOfNumbers) Currents += parseFloat(display)
    //   else if ('-' == stringOfNumbers) Currents -= parseFloat(display)
    //   else if ('/' == stringOfNumbers) Currents /= parseFloat(display)
    //   else if ('*' == stringOfNumbers) Currents *= parseFloat(display)
    //   else Currents = parseFloat(display)
    //   Fcalc.value = Currents
    //   stringOfNumbers = operation
    // }
  }
}

///Adding point in number
const decimal = () => {
  let currentNumber = Fcalc.value
  if (newNumber) {
    currentNumber = '0.'
    newNumber = false
  } else {
    if (currentNumber.indexOf('.') == -1) {
      currentNumber += '.'
    }
    Fcalc.value = currentNumber
  }
}

//Clean result or screen
const clean = () => {
  stringOfNumbers = ''
  Fcalc.value = '0'
}

// Percent calculation
const percent = () => (Fcalc.value = parseFloat(Fcalc.value) / 100)
