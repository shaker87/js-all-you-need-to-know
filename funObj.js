let obj = {
    1:{
        name: "shaker",
        email: "shaker.hossain@gmail.com",
        phone: "05666555"
    },
    2:{
        name: "tarek",
        email: "tarek.hossain@gmail.com",
        phone: "055555555"
    },
    3:{
        name: "atik",
        email: "atik.hossain@gmail.com",
        phone: "055666655"
    }
}


const objKey = Object.keys(obj)

console.log('objKey', objKey)
const newArray = objKey.map(itemKey => {
    let newArr = obj[itemKey];
    console.log('newArr :>> ', newArr);
    newArr.id = itemKey;
    return newArr;
})
console.log('newArray :>> ', newArray);
