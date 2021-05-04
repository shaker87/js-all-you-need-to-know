var array = [1,4,6,3,8,9,5]


//var result = array.sort((a,b) => a-b); //asending

//var result = array.sort((a,b) => b-a); //desending

// console.log('result :>> ', result);

// for (let i = 0; i < array.length; i++) {
//     array[i] = array[i] + 2;  
// }

// console.log('array :>> ', array);

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum = sum + array[i]
    
// }

// console.log('sum :>> ', sum);


const sum = array.reduce((currentValue, loopValue) => currentValue + loopValue ,0)
console.log('sum :>> ', sum);

