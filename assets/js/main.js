const offset = 0;
const limit = 100;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon ${pokemon.types[0].type.name}">
    <div class="pokemon-info-head">
        <span class="pokemon-name">${pokemon.name}</span>
        <span class="pokemon-code">${pokemon.id.toString().padStart(3, '0')}</span>
    </div>
    <div class="pokemon-info-body">
        <ol class="pokemon-type-list">
            <li class="pokemon-type ${pokemon.types[0].type.name}">${pokemon.types[0].type.name}</li>
            <li class="pokemon-type ${pokemon.types[1].type.name}">${pokemon.types[1].type.name}</li>
        </ol>

        <img class="pokemon-image"
            src="${pokemon.sprites.other.dream_world.front_default}"
            alt="${pokemon.name}">
    </div>
</li>`;
}

let pokemonListHtml = document.querySelector('.pokemon-list');

fetch(url)
    .then(responseTxt => responseTxt.json())
    .then(responseJson => responseJson.results)
    .then(pokemonList => {
        for (let i = 0; i < pokemonList.length; i++) {
            fetch(pokemonList[i].url)
                .then(responseTxt => responseTxt.json())
                .then(pokemonDetails => pokemonListHtml.innerHTML += convertPokemonToLi(pokemonDetails));
        }
    });

