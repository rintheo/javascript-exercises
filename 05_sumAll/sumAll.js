const sumAll = function(num1, num2) {
    let sum = 0;
    let numStart;
    let numEnd;

    if (typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        num1 < 0 ||
        num2 < 0) { 
        return 'ERROR';
    }
    else {
        if (num1 < num2) {
            numStart = num1;
            numEnd = num2;
        }
        else {
            numStart = num2;
            numEnd = num1;        
        }
    }
  
    for (let i = numStart; i <= numEnd; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
