const getTheTitles = function(array) {
    // const book = [];
    // for (item of array) {
    //     book.push(item.title);
    // }
    // return book;
    return array.map((item) => item.title);
};

// Do not edit below this line
module.exports = getTheTitles;
