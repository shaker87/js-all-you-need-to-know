var a = 100

//newPrint(a)

print(10)

var newPrint = print

newPrint(50)


function print(a){
    console.log('a :>> ', a);
}

print(a)

//Creational Phase
// a = undefined
// newPrint = undefined
// print = ref
//Executional Phase
//a = 100
// newPrint = undefined first time
// print call output 10
// newPrint = print assign
//newPrint console output 50
// print output 100