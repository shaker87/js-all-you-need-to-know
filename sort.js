var person = [
    {
        name: 'A',
        age: 20
    },
    {
        name: 'B',
        age: 19
    },
    {
        name: 'C',
        age: 21
    },
    {
        name: 'D',
        age: 24
    }

]
console.log('person :>> ', person);

const newPersonArray = person.sort((a, b) => {
    if(a.age > b.age){
        return 1
    }else if(a.age < b.age){
        return -1
    }else{
        return 0
    }
})
console.log('newPersonArray :>> ', newPersonArray);