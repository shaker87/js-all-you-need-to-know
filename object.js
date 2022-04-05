// Declare object

let person = {
    name: 'Sumaya',
    age: 23
}
//  console specific key value
//console.log('person :>> ', person.name);
// reAssign key value

console.log('person :>> ', person);

person.name = 'Shaker';

console.log('person :>> ', person);

let key = Object.keys(person);
let newA = person
console.log('key :>> ', key);

let values = Object.values(person)
console.log('values :>> ', values);

let objToArr = Object.entries(person);
console.log('objToArr :>> ', objToArr);