function sample (a,b, cb){
    const c = a + b;
    const d = a - b;
    return cb(c,d)
}



var result = sample(5, 5, function sum(x,z){
    return x + z;
   })

console.log('result :>> ', result);