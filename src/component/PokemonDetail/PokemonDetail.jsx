import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import './PokemonDetail.css'

function PokemonDetail() {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    async function downloadPokemon() {

        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        console.log(response.data)
        setPokemon({
            name: response.data.name,
            image: response.data.sprites.other.dream_world.front_default,
            height: response.data.height,
            weight: response.data.weight,
            types: response.data.types.map((t) => t.type.name)
        })
    }



    useEffect(() => {
        downloadPokemon();

    }, [])


    return (
        <>
            <div className='PokemonDetails-wrapper'>
                <div className="container">
                    <div>Details</div>
                    <img src={pokemon.image} />
                    <div>{id}</div>
                    <div>{pokemon.name}</div>
                    <div>height:{pokemon.height}</div>
                    <div>weight:{pokemon.weight}</div>
                    <div>types:{pokemon.types && pokemon.types.map((t) => <div key={id}>{t}</div>)}</div>
                </div>

            </div>
        </>
    );
}
export default PokemonDetail;