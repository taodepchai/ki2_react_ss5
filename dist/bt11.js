"use strict";
// Lấy giá trị từ ô input
function getFirstNumber() {
    return parseFloat(document.getElementById('firstNumber').value);
}
function getSecondNumber() {
    return parseFloat(document.getElementById('secondNumber').value);
}
// Thêm hàm tính toán vào giao diện
function add() {
    let firstNumber = getFirstNumber();
    let secondNumber = getSecondNumber();
    let result = firstNumber + secondNumber;
    alert(`Result: ${result}`);
}
function subtract() {
    let firstNumber = getFirstNumber();
    let secondNumber = getSecondNumber();
    let result = firstNumber - secondNumber;
    alert(`Result: ${result}`);
}
function multiply() {
    let firstNumber = getFirstNumber();
    let secondNumber = getSecondNumber();
    let result = firstNumber * secondNumber;
    alert(`Result: ${result}`);
}
function divide() {
    let firstNumber = getFirstNumber();
    let secondNumber = getSecondNumber();
    let result = firstNumber / secondNumber;
    alert(`Result: ${result}`);
}
// Thêm hàm tính lũy thừa và giai thừa vào giao diện
function power() {
    let firstNumber = getFirstNumber();
    let secondNumber = getSecondNumber();
    let result = Math.pow(firstNumber, secondNumber);
    alert(`Result: ${result}`);
}
function factorial() {
    let num = getFirstNumber();
    let result = calculateFactorial(num);
    alert(`Factorial of ${num} = ${result}`);
}
// Hàm tính giai thừa
function calculateFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }
    else {
        return num * calculateFactorial(num - 1);
    }
}
