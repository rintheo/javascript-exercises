const add = function(...nums) {
	return nums.reduce((total, num) => total + num, 0);
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(nums) {
	return nums.reduce((total, num) => total + num, 0);
};

const multiply = function(...nums) {
  return nums.reduce((total, num) => total * num, 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) { // num = 3
	// const factorial = [];
  // for (i = num; i > 0; i--) factorial.push(i);
  // return factorial.reduce((result, num) => result * num, 1);
  return (num > 0) ? num * factorial(num - 1) : 1; // ternary if...else recursion 
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
