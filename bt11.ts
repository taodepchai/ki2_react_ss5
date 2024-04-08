// Lấy giá trị từ ô input
function getFirstNumber(): number {
    return parseFloat((<HTMLInputElement>document.getElementById('firstNumber')).value);
}

function getSecondNumber(): number {
    return parseFloat((<HTMLInputElement>document.getElementById('secondNumber')).value);
}

// Thêm hàm tính toán vào giao diện
function add(): void {
    let firstNumber: number = getFirstNumber();
    let secondNumber: number = getSecondNumber();
    let result: number = firstNumber + secondNumber;
    alert(`Result: ${result}`);
}

function subtract(): void {
    let firstNumber: number = getFirstNumber();
    let secondNumber: number = getSecondNumber();
    let result: number = firstNumber - secondNumber;
    alert(`Result: ${result}`);
}

function multiply(): void {
    let firstNumber: number = getFirstNumber();
    let secondNumber: number = getSecondNumber();
    let result: number = firstNumber * secondNumber;
    alert(`Result: ${result}`);
}

function divide(): void {
    let firstNumber: number = getFirstNumber();
    let secondNumber: number = getSecondNumber();
    let result: number = firstNumber / secondNumber;
    alert(`Result: ${result}`);
}

// Thêm hàm tính lũy thừa và giai thừa vào giao diện
function power(): void {
    let firstNumber: number = getFirstNumber();
    let secondNumber: number = getSecondNumber();
    let result: number = Math.pow(firstNumber, secondNumber);
    alert(`Result: ${result}`);
}

function factorial(): void {
    let num: number = getFirstNumber();
    let result: number = calculateFactorial(num);
    alert(`Factorial of ${num} = ${result}`);
}

// Hàm tính giai thừa
function calculateFactorial(num: number): number {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * calculateFactorial(num - 1);
    }
}
