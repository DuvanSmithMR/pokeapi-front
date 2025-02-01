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
    card.classList.add('bg-white', 'rounded-lg', 'shadow-lg', 'p-6', 'text-center', 'transform', 'hover:scale-105', 'transition-transform');
    card.innerHTML = `
        <h3 class="text-xl font-semibold text-gray-800 capitalize">${pokemon.name}</h3>
        <img class="mx-auto w-24 h-24" src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
    `;
    container.appendChild(card);
}

fetchPokemon();