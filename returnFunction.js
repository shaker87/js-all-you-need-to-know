const great = (msg) => {
    const greatings = (name) => {
        return msg + ',' + name
    }

    return greatings;
}

const message = great('Hello') // return function
//console.log('message :>> ', message);

const result = message('Setu')

//console.log('result :>> ', result);


const base = (b) => {
    const power = (n) => {
        let result = 1;
        for (let i = 0; i < b; i++) {
            result = result * n
            console.log('result , i, n :>> ', result , i , n);
            
        }
        return result
    }

    return power
}

const base10 = base(10)
const result1 = base10(2)

console.log('base10 :>> ', base10);
console.log('result1 :>> ', result1);
