const sayHi = (n) => {
    if(n==0){
        return
    }

    console.log("Hello setu")

    return sayHi(n-1)
} 

sayHi(5)


const fact = (n) => {
    if(n==1){
        return 1
    }

    return n * fact(n-1)
}

const res = fact(5)
console.log('res :>> ', res);


const sum = (n) => {
    if(n==1){
        return 1
    }

    return n + sum(n-1)
}


console.log('res1 :>> ', sum(5));


const arr = [1,2,3,4,5,6];

const sumOfArray = (arr, lastIndex) => {
    if(lastIndex < 0){
        return 0
    }

    return arr[lastIndex] + sumOfArray(arr, lastIndex-1)
}

const res2 = sumOfArray(arr, arr.length - 1)
console.log('res2 :>> ', res2);