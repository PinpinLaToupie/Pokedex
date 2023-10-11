function PokemonCard() {

    const index = 1;
    const pokemon = pokemonList[index];


    return (
        <figure>
            {pokemon.imgSrc ? (
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            ) : (
                <p>???</p>
            )}
            <figcaption>{pokemon.name}</figcaption>
        </figure>
    );
}

const pokemonList = [
    {
        name: "bulbasaur",
        imgSrc:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
        name: "mew",
    },
];


export default PokemonCard;