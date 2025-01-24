import { useEffect, useState } from "react";
import axios from 'axios';
import Pokemon from "../pokemon/Pokemon";
import './PokemonList.css';
function PokemonList() {



    const [pokemonList, setPokemonList] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const [api, setApi] = useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');


    async function downloadPokemon() {
        setLoading(true)
        const response = await axios.get(api);
        // console.log(response);
        // console.log(response.data);
        console.log(response.data);

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);
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
    }, [api]);

    return (
        <>
            <div className='pokemon-list-wrapper'>
                <div className="Loading">

                    {(isLoading) ? 'Loading...' : 'Data Downloaded'}
                </div>
                <div className="pokelist">
                    {pokemonList.map((p) => (<Pokemon key={p.id} name={p.name} image={p.image} id={p.id} />))}
                </div>
                <div className='prevNextButton'>
                    <button disabled={prevUrl == null} onClick={() => setApi(prevUrl)}>Prev</button>
                    <button disabled={nextUrl == null} onClick={() => setApi(nextUrl)}>Next</button>
                </div>
            </div>

        </>
    )

}
export default PokemonList;