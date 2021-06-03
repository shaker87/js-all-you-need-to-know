const arr = [1,2,3,4,5,6];


const sqrt = arr.map(item =>  {
  return item * item
})

console.log('sqrt :>> ', sqrt);

// function forArr(ar){
//     const newArray =[]
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i] * arr[i];
//         newArray.push(element)
        
//     }
//     return newArray
// }

// console.log('result :>> ', forArr(arr));

function forArr(ar, cb){
    const newArray =[]
    for (let i = 0; i < arr.length; i++) {
        const element = cb(arr[i])
        newArray.push(element)
        
    }
    return newArray
}

function cb(value){
    return value * value;
}

console.log('result :>> ', forArr(arr, cb));

function forArr(ar, ab){
    const newArray =[]
    for (let i = 0; i < arr.length; i++) {
        const element = qb(arr[i])
        newArray.push(element)
        
    }
    return newArray
}

function qb(value){
    return value * value * value;
}

console.log('result :>> ', forArr(arr, qb));