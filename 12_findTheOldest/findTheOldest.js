const findTheOldest = function(array) {
  yearCurrent = new Date().getFullYear();
  return array.sort((a, b) => {
    for (person of [a, b]) {
      person.yearLatest = (person.hasOwnProperty('yearOfDeath')) ?
                           person.yearOfDeath : yearCurrent;
    }
    return (b.yearLatest - b.yearOfBirth) - (a.yearLatest - a.yearOfBirth);
  })[0];
};


// Do not edit below this line
module.exports = findTheOldest;
