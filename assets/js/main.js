const offset = 0;
const limit = 10;

const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
    return `<li class="pokemon">
    <div class="pokemon-info-head">
        <span class="pokemon-name">${pokemon.name}</span>
        <span class="pokemon-code">001</span>
    </div>
    <div class="pokemon-info-body">
        <ol class="pokemon-type-list">
            <li class="pokemon-type">grass</li>
            <li class="pokemon-type">poison</li>
        </ol>

        <img class="pokemon-image"
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg"
            alt="${pokemon.name}">
    </div>
</li>`;
}

let pokemonListHtml = document.querySelector('.pokemon-list');

fetch(url)
    .then(responseTxt => responseTxt.json())
    .then(responseJson => responseJson.results)
    .then(pokemonList => {
        for(let i=0;i<pokemonList.length;i++){
            pokemonListHtml.innerHTML += convertPokemonToLi(pokemonList[i]);
        }
    });

