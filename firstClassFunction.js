// first class function store in variable
// first class function store in array
// first class function store in object


function sum(a,b){
    return a + b;
}

var add = sum;

console.log('add :>> ', add(2,2));

const arr = [sum];

console.log('arr :>> ', arr[0](4,5));

const obj = {
    a : sum
}

console.log('obj :>> ', obj.a(8,8));