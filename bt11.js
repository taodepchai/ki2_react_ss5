// Lấy giá trị từ ô input
function getFirstNumber() {
  return parseFloat(document.getElementById("firstNumber").value);
}
function getSecondNumber() {
  return parseFloat(document.getElementById("secondNumber").value);
}
// Thêm hàm tính toán vào giao diện
function add() {
  var firstNumber = getFirstNumber();
  var secondNumber = getSecondNumber();
  var result = firstNumber + secondNumber;
  alert("Result: ".concat(result));
}
function subtract() {
  var firstNumber = getFirstNumber();
  var secondNumber = getSecondNumber();
  var result = firstNumber - secondNumber;
  alert("Result: ".concat(result));
}
function multiply() {
  var firstNumber = getFirstNumber();
  var secondNumber = getSecondNumber();
  var result = firstNumber * secondNumber;
  alert("Result: ".concat(result));
}
function divide() {
  var firstNumber = getFirstNumber();
  var secondNumber = getSecondNumber();
  var result = firstNumber / secondNumber;
  alert("Result: ".concat(result));
}
// Thêm hàm tính lũy thừa và giai thừa vào giao diện
function power() {
  var firstNumber = getFirstNumber();
  var secondNumber = getSecondNumber();
  var result = Math.pow(firstNumber, secondNumber);
  alert("Result: ".concat(result));
}
function factorial() {
  var num = getFirstNumber();
  var result = calculateFactorial(num);
  alert("Factorial of ".concat(num, " = ").concat(result));
}
// Hàm tính giai thừa
function calculateFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * calculateFactorial(num - 1);
  }
}
