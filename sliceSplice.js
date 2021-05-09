var data = ['Setu', 'Shaker', 'Ritu', 'Tarek', 'Atik'];
const newData = [];

 console.log('data :>> ', data);

// data.splice(3, 1, 'Abudullah')

// console.log('dataAfter :>> ', data);

// data.splice(2, 2)
// console.log('data :>> ', data);

const loopData = data.slice();
// console.log('loopData :>> ', loopData);
for (let i = 0; i < loopData.length; i++) {
    if(loopData[i] == newData[i]){
        loopData[i].isChecked = !newData[i].isChecked;
        if(loopData[i].isChecked){
            newData.push(loopData[i])
        }
    } 
    
}

console.log('newData :>> ', newData);