function PokemonCard() {

    const pokemon = pokemonList[0];

    return (
        <figure>
            {pokemon.imgSrc ? (
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" />
            ) : (
            <p>???</p>
            )}
            <figcaption>Bulbasaur</figcaption>
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