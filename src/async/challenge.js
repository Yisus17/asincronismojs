const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const anotherFunction = async (url_api) =>{
    try{
        const data = await fetchData(url_api);
        const character = await fetchData (`${API}${data.results[0].id}`);
        const origin = await fetchData (character.origin.url);
        
        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
    } catch (error){
        console.error(error);
    }
}

//Para esta opcion, habria que implementar los gets como 3 promise diferentes (ESTO ES SUPER UTIL)
// async function foo() {
// 	const [characters , episodes, locations] = awaitPromise.all([
// 		getCharacters(),
// 		getEpisodes(),
// 		getLocations(),
// 	])

// 	console.log(characters)
// 	console.log(episodes)
// 	console.log(locations)
// }



console.log('BEFORE');
anotherFunction(API);
console.log('AFTER');