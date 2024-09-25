const _ = require('lodash');


//1
const numbers = [5, 3, 8, 1, 2,4, 9];
const sortedNumbers = _.sortBy(numbers);
console.log(sortedNumbers);

//2
const tabDouble =[2,1,2,2,3,3];
const tabWithoutDouble = _.uniq(tabDouble);
console.log(tabWithoutDouble);
