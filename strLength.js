const str = 'Shaker Hossain'

let count = 0;

// for (let i = 0; i < str.length; i++) {
//     if(i==' '){
//         count =+ i
//     }
//     count =+ i
    
// }
while(true){
    if(str.charAt(count) == ''){
        break;
    }
    else{
        count++
    }
}
console.log('count :>> ', count);