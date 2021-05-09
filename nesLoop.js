// for (let i = 1; i <= 5; i++) {
//     var result = '';
//     for(let j = 1; j <= i; j++) {
//         result += j + ' ';
//     }
//     console.log(result);
// }

// for(var i = 1; i < 10; i++) {
//     var result = '';
//     for(let j = 1; j < 5; j++){
//         result += "*" + " "
//     }
//     console.log(result)
// }

for (let i = 0; i < 5; i++) {
    var square = ' '
    for (let j = 0; j < i; j++) {
        
        square += j + "*"
    }

    console.log('square :>> ', square);
    
}