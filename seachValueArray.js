const data = [
    {
        name: 'shaker',
        title: 'sh',
    },
    {
        name: 'tarek',
        title:'th',
    },
    {
        name: 'atik',
        title: 'ah',
    },
]

let name = 'ami';
let isFound = false;

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if(element.name === name){
        console.log('data found :>> ', element);
        isFound= true;
        break;
    }
}
if(!isFound){
    console.log('data not Found');
}