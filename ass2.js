
function addition(a, b, c = 0, d = 0) {
  return a + b + c + d;
}


function subtraction(a, b, c = 0, d = 0) {
  return a - b - c - d;
}

function multiplication(a, b, c = 1, d = 1) {
  return a * b * c * d;
}


function division(a, b, c = 1, d = 1) {
  return a / b / c / d;
}


console.log(addition(1, 2));               // Output: 3
console.log(subtraction(10, 5, 2));        // Output: 3
console.log(multiplication(2, 3, 4));      // Output: 24
console.log(division(20, 2, 2));           // Output: 5
