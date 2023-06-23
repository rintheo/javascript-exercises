const fibonacci = function(num) {
    // if (num < 0) {
    //     return 'OOPS'
    // }
    // let prev = 0;
    // let prevprev = 0;
    // let current = 0;
    // let fibonacciArray = [];
    // for (let i = 0; i < num; i++) {
    //     (i === 0) ? current = 1 : current = prev + prevprev;
    //     prevprev = prev;
    //     prev = current;
    //     fibonacciArray.push(current);
    // }
    // return fibonacciArray[num - 1];    
     if (num < 0 ) return 'OOPS';
     const fibonacciArray = [0, 1];
     for (let i = 1; i <= num; i++) {
        fibonacciArray.push(fibonacciArray[i] + fibonacciArray[i - 1]);
     }
     return fibonacciArray[num];
  };

// Do not edit below this line
module.exports = fibonacci;
