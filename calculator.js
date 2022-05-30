const calculator = {
    add: function(firstNumber, secondNumber) {
        console.log(firstNumber + secondNumber);
    },
    minus: function(firstNumber, secondNumber) {
        console.log(firstNumber - secondNumber);
    },
    multiply: function(firstNumber, secondNumber) {
        console.log(firstNumber * secondNumber);
    },
    divide: function(firstNumber, secondNumber) {
        console.log(firstNumber / secondNumber);
    },
    powerof: function(firstNumber, secondNumber) {  // 제곱
        console.log(firstNumber ** secondNumber);
    },
}

calculator.add(1, 2);
calculator.minus(1, 2);
calculator.multiply(1, 2);
calculator.divide(1, 2);
calculator.powerof(1, 2);