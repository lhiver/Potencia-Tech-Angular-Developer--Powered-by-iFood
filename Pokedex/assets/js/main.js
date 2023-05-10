const offset = 0
const limit = 10
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}0&limit=${limit}`

function covertPokemonToHtml(pokemon){
    return `
    <li class="pokemon">
                <span class="numero">#001</span>
                <span class="nome">${pokemon.name}</span>
                <div class="detalhes">
                    <ol class="tipos">
                        <li class="tipo">grass</li>
                        <li class="tipo">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}>
                </div>
 
                </li>
            `    
}

fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemonList) => {
        for (let i = 0; i < pokemonList.length; i++) {
            const pokemon = pokemonList[i];
            console.log(covertPokemonToHtml(pokemon))
            
        }
    })
    .catch((error) => console.error(error))