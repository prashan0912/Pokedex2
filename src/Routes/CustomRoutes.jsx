import {Routes ,Route} from 'react-router-dom'
import PokeDex from '../component/Pokedex/Pokedex';
import PokemonDetail from '../component/PokemonDetail/PokemonDetail';

function CustomRoutes() {
    return (
        <>
        <Routes>
            <Route path='/' element={<PokeDex/>}/>
            <Route path='/pokemon/:id' element={<PokemonDetail/>}/>

        </Routes>

        </>
    )
}
export default CustomRoutes;