const str = '1000'
const num = 10

console.log('strToNumber :>> ', Number.parseInt(str));
console.log('numberToString :>> ', num.toString());


// falsy

// ''
// 0
// null
// undefined
// Nan

let data;

console.log('emptyString :>> ', Boolean(''));
console.log('null :>> ', Boolean(null));
console.log('Zero :>> ', Boolean(0));
console.log('Undefined :>> ', Boolean(undefined));
//console.log('Nan :>> ', Boolean(Nan));