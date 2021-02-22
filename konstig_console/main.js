pokemonArray = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=15')
.then(response => response.json())
.then(pokemonData => pokemonData.results.forEach(pokemon => fetchPokemonStats(pokemon)));

function fetchPokemonStats(pokemon) {
    let url = pokemon.url;
    fetch(url)
    .then(response => response.json())
    .then(pokeData => pokemonArray.push(pokeData))
}

console.log(pokemonArray);
console.log(pokemonArray[0]);