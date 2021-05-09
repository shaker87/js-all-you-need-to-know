let data = [
    {
        name: 'shaker',
        title: 'sh',
    },
    {
        name: 'tarek',
        title: 'th',
    },
    {
        name: 'atik',
        title: 'ah',
    },
    {
        name: 'atik',
        title: 'ah',
    },
    {
        name: 'atik',
        title: 'ah',
    },
]

let searchInput = 'atik';
// let isFound = false;

// for (let i = 0; i < data.length; i++) {
//     const element = data[i];
//     if (element.name === searchInput) {
//         console.log('data found :>> ', element);
//         isFound = true;
//         break;
//     }
// }
// if (!isFound) {
//     console.log('data not Found');
// }


// const searchData = (searchInput) => {
//     let searchList = data.filter(item => {
//         let itemData = item.name.toUpperCase()
//         let searchData = searchInput.toUpperCase()
//         return itemData.indexOf(searchData) > -1;
//     })
//     return searchList;
// }

// let result = searchData("atik")

// console.log('result :>> ', result);

// const searchData = data.filter(item => item.name.toUpperCase() === searchInput.toUpperCase())

// console.log('searchData :>> ', searchData);


const search = (input) =>{
    const searchData = data.filter(item => item.name.toUpperCase() === searchInput.toUpperCase())
    return searchData;
} 

console.log('search :>> ', search("atik"));