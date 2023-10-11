function PokemonCard(props) {
    console.log(props);

    const { pokemon } = props;



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
export default PokemonCard;