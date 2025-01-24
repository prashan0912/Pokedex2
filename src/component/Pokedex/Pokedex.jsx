import Search from "../Search/Search";
import PokemonList from '../PokemonList/Pokemonlist'
import "./PokeDex.css"

function PokeDex() {
    return (
        <>
            <div className="PokeDex-wrapper">
                <div id="content">
                    <div id="heading">
                        <div id="titleInputContainer">
                            <div id="title">
                                {/* PokeDex */}
                            </div>
                            <div id="inputName"><Search /></div>
                        </div>
                    </div>
                    <div className="imageContent">

                        <div id="imageHeading">Pokemon List</div>
                        <div id="imageContainer">
                            <PokemonList />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PokeDex;