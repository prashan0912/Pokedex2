import { useEffect, useState } from "react";
import axios from 'axios';
import Pokemon from "../pokemon/Pokemon";
function PokemonList() {

    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setLoading] = useState(true);



    async function downloadPokemon() {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon');
        // console.log(response);
        // console.log(response.data);
        console.log(response.data);
        const pokemonResults = response.data.results; //sare pokemon ki list ek variable me aa gayi
        const pokemonResultPromises = pokemonResults.map((p) => axios.get(p.url));//har ek pokemon ki detail ke liye ek request bhej rahe hain
        // console.log(pokemonResultPromises);
        const pokemonData = await axios.all(pokemonResultPromises);//sare pokemon ki detail aa gayi
        console.log(pokemonData);
        console.log('jai mata di');

        const PokeList = pokemonData.map((p) => {
            const pokemon = p.data;
            return {
                id: pokemon.id,
                name: pokemon.name,
                image: pokemon.sprites.other.dream_world.front_default,
                }
        });
        console.log(PokeList);
        setPokemonList(PokeList);
        setLoading(false);
    }
    useEffect(() => {
        downloadPokemon();
    }, []);

    return (
        <>
            <div className="pokemon-list-wrapper">
                <div>Pokemon List</div>
                {(isLoading) ? 'Loading...' : 'Data Downloaded'}
                {pokemonList.map((p) => (<Pokemon key={p.id} name={p.name} image={p.image}  id={p.id} /> ))}
            </div>

        </>
    )

}
export default PokemonList;