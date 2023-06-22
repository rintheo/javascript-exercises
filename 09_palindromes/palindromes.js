const palindromes = function (str) {
    const arr = [];
    for (let i = 0; i < str.length; i++) {
        if ((str[i].toUpperCase() != str[i].toLowerCase()) || 
           (Number.isInteger(parseInt(str[i])))) {
            arr.push(str[i].toLowerCase());
        }
    }
    return arr.join('') === arr.reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
