const container = document.getElementById('pokemon-container');
const prevPageButton = document.getElementById('prev-page');
const nextPageButton = document.getElementById('next-page');

let offset = 0; // Inicia en 0 para la primera página
const limit = 8; // Número de Pokémon por página

async function fetchPokemon(offset, limit) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`);
    const data = await response.json();
    container.innerHTML = ''; // Limpia el contenedor antes de agregar nuevos Pokémon
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

// Cargar la primera página al inicio
fetchPokemon(offset, limit);

// Evento para el botón "Siguiente"
nextPageButton.addEventListener('click', () => {
    offset += limit; // Aumenta el offset para cargar la siguiente página
    fetchPokemon(offset, limit);
    updatePaginationButtons();
});

// Evento para el botón "Anterior"
prevPageButton.addEventListener('click', () => {
    if (offset >= limit) {
        offset -= limit; // Disminuye el offset para cargar la página anterior
        fetchPokemon(offset, limit);
        updatePaginationButtons();
    }
});

// Función para actualizar el estado de los botones de paginación
function updatePaginationButtons() {
    prevPageButton.disabled = offset === 0; // Deshabilita el botón "Anterior" si estamos en la primera página
}