var x = 10;

function hello(){
    console.log('x :>> ', x);
    var y = 12;
    return function(){
        console.log('y :>> ', y);
    }
}

const abc = hello()

console.dir('abc :>> ', abc);