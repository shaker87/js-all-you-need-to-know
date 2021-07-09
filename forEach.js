var arr = [1,2,3,4,5];

// arr.forEach((value,index, arr)=> {
//     console.log('value,index,arr :>> ', value,index,arr);
// })


function forEach(arr, cb){
    // var sum = 0;
    for(var i = 0; i < arr.length; i++){
        // sum += arr[i];
        cb(arr[i], i, arr)
    }
    return arr;
}

function cb(value, index, arr){
    arr[index] = value + 5;
    // return arr;
}
console.log('forEach Sum :>> ', forEach(arr, cb));