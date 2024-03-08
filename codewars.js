

console.log('---------------------------------------------------------')
console.log('CODEWARS PROBLEMS')
console.log('---------------------------------------------------------')



console.log('------------------------PROBLEM 1------------------------')

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
    //   "  *  ",
    //   " *** ", 
    //   "*****"
    // ]
    
function towerBuilder(nFloors) {
    let result = [];
    for(let i = 0; i < nFloors; i++){
        let temp = '';
        temp += ' '.repeat(nFloors-i-1);
        temp += '*' + '*'.repeat(i*2);
        temp += ' '.repeat(nFloors - i - 1);
        result.push(temp);
    }
    return result;
}

console.log(towerBuilder(5))

console.log('------------------------PROBLEM 2------------------------')

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.    

const binaryArrayToNumber = arr => {
    return parseInt(arr.join(''), 2);
  };

console.log(binaryArrayToNumber([1, 0, 0, 1, 0]))