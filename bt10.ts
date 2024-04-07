function add(x: number | string, y: number | string): number | string {
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid input";
        } else {
            x = parseFloat(x);
        }
    }

    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid input";
        } else {
            y = parseFloat(y);
        }
    }

    return x + y;
}

function subtract(x: number | string, y: number | string): number | string {
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid input";
        } else {
            x = parseFloat(x);
        }
    }

    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid input";
        } else {
            y = parseFloat(y);
        }
    }

    return x - y;
}

function multiply(x: number | string, y: number | string): number | string {
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid input";
        } else {
            x = parseFloat(x);
        }
    }

    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid input";
        } else {
            y = parseFloat(y);
        }
    }

    return x * y;
}

function divide(x: number | string, y: number | string): number | string {
    if (typeof x === 'string') {
        if (isNaN(parseFloat(x))) {
            return "Invalid input";
        } else {
            x = parseFloat(x);
        }
    }

    if (typeof y === 'string') {
        if (isNaN(parseFloat(y))) {
            return "Invalid input";
        } else {
            y = parseFloat(y);
        }
    }

    if (y === 0) {
        return "Division by zero";
    }

    return x / y;
}

console.log("Addition:", add(5, 3));         
console.log("Subtraction:", subtract(5, 3));   
console.log("Multiplication:", multiply(5, 3));
console.log("Division:", divide(5, 3));        

// Kiểm tra với đầu vào kiểu dữ liệu là string
console.log("Addition with string input:", add('5', '3'));         
console.log("Subtraction with string input:", subtract('5', '3')); 
console.log("Multiplication with string input:", multiply('5', '3')); 
console.log("Division with string input:", divide('5', '3'));        

// Kiểm tra với đầu vào kiểu dữ liệu không hợp lệ
console.log("Invalid input:", add('abc', 3));       
console.log("Invalid input:", subtract(5, 'def'));  
