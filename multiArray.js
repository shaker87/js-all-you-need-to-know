var arr = [
    [1,2,3,4,5],
    [7,8,9,10,11],
    [12,13,14,15]
]

// for (var i = 0; i < arr.length; i++){
   
//    for (var j = 0; j < arr.length; j++){
//     console.log(arr[i][j])
//    }
   
// }

var result = arr[1].map(arr => arr*2)
console.log(result)