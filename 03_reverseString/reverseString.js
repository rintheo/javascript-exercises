const reverseString = function(string) {
    stringReversed = '';
    for (let i = 0; i < string.length; i++) {
        stringReversed += string.charAt(string.length -1 - i);
    }
    return stringReversed;
};

// Do not edit below this line
module.exports = reverseString;
