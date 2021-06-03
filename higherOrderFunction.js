function add(a,b){
    return a + b;
}

function manipulate(a,b,func){
    var c = a + b;
    var d = a - b;

   return function(){
        var m = func(a,b)
        return c*d*m
    }
}

 const result = manipulate(5,6, add);
 console.log('result :>> ', result());