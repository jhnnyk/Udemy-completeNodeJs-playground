const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday'
// };

// // const bookJSON = JSON.stringify(book);
// // console.log(bookJSON);

// // const parsedData = JSON.parse(bookJSON);
// // console.log(parsedData.author);

// const bookJSON = JSON.stringify(book);
// fs.writeFileSync('1-json.json', bookJSON);

// const dataBuffer = fs.readFileSync('1-json.json');
// const dataJSON = dataBuffer.toString();
// const data = JSON.parse(dataJSON);
// console.log(data.title);

// Challenge
const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);

data.name = 'jhnnyk';
data.age = 43;

const myDataJSON = JSON.stringify(data);
fs.writeFileSync('1-json.json', myDataJSON);
