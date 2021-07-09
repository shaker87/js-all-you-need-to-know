function currying(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

const result = currying(5)(10)(15);
console.log('result :>> ', result);