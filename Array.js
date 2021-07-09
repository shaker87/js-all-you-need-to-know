// let num = [1,2,3,4,5,6,7,4,8,8,8,9,10];
// num[0] = 10;

// console.log('num1 :>> ', num);
// Push
// num.push(11,12,13)
//  console.log('num2 :>> ', num);

// // Pop
// num.pop();
// console.log('num3 :>> ', num);
// // Unshift

// num.unshift(4,5,7);
// console.log('num4 :>> ', num);
// //Shift

// num.shift()
// console.log('num5 :>> ', num);
//Slice
// let newArr = num.slice(2,5)
// console.log('newArr :>> ', newArr);
// //Splice

// num.splice(2,2)
// console.log('newArr2 :>> ', num);
//map

// num.map((value,index, arr) => {
//     let sqr = value * value;
//     // console.log('sqr :>> ', sqr);
// })
// let findValue = num.find((value,index) => value === 4);

// console.log('findValue :>> ', findValue);

// let filterValue = num.filter((value,index) => value == 8);

// console.log('filterValue :>> ', filterValue);


//Find
//Filter
//Reduce

let num = [1,2,3,4,5,6,7,4,8,8,8,9,10];

let total = num.reduce((previousValue, currentValue) => previousValue + currentValue , 0);
console.log('total :>> ', total);
let sum = 0 // 1 3
for(let i = 0; i < num.length; i++){
    // console.log(num[i])
    sum = sum + num[i]
}
console.log('sum :>> ', sum);