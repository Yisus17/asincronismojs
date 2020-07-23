const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
    .then(data => {
        console.log(data.info.count);
        return fetchData(`${API}${data.results[0].id}`)
    })
    .then(data => {
        console.log(data.name);
        return fetchData(data.origin.url)
    })
    .then(data => {
        console.log(data.dimension)
    })
    .catch(error => console.error(error));


// NOPE
// Promise.all([fetchData(API), fetchData(`${API}${data.results[0].id}`), fetchData(data.origin.url)])
//     .then(response => {
//         console.log('Results', response);
//     })
//     .catch(error => {
//         console.error(error);
//     });