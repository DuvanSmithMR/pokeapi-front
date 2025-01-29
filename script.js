const container = document.getElementById('pokemon-container');

async function fetchPokemon() {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const data = await response.json();
    data.results.forEach(async (pokemon) => {
        const pokemonData = await fetch(pokemon.url);
        const pokemonInfo = await pokemonData.json();
        displayPokemon(pokemonInfo);
    });
}

function displayPokemon(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.innerHTML = `
        <h3>${pokemon.name}</h3>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
    container.appendChild(card);
}

fetchPokemon();