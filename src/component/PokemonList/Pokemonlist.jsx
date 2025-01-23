import { useEffect, useState } from "react";

function PokemonList() {

    // let a = 'https://pokeapi.co/api/v2/pokemon';



    const [x, setX] = useState(0);
    const [y, setY] = useState(0);


    useEffect(() => {
        console.log("hello useEffect")
    }, [x, y]);

    return (
        <>

            <div>
                X : {x} <button onClick={() => setX(x + 1)}>INc </button>
            </div>
            <div>
                Y : {y} <button onClick={() => setY(y + 1)}>inc </button>
            </div>
            <div className="ListOfPokemon"></div>
        </>
    )

}
export default PokemonList;