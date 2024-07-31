const add = function(a, b) {
    return a + b;
  };
  
const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
return a * b;
};

const power = function(a, b) {
    return a ** b;
};

const divide = function(a, b) {
    if(b === 0) return "Error"
    return a / b;
};

export {
    add,
    subtract,
    multiply,
    power,
    divide
}