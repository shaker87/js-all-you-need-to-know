// function sum (){
//     let sum = 0;

//     for (let index = 0; index < arguments.length; index++) {
//         sum += arguments[index];      
//     }
//     return sum;
// }

function sum(...rest){
    return rest.reduce((a,b) => a+b); //rest operator
}

const result = sum(1,2,3,4,5);
console.log('result :>> ', result);

var obj = {
    a: 10,
    b: 20,
    c: 30
}

console.log('obj :>> ', obj);

var obj2 = {...obj} //spread operator
obj2.a = 50

console.log('obj2 :>> ', obj2);