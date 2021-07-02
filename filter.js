const arr = [1,2,3,4,5,6];


const newArr = arr.filter(value => {
    return value % 2 == 1;
});

console.log('newArr =>> ', newArr);