
import './App.css'
import PokeDex from './component/Pokedex/Pokedex'
import CustomRoutes from './Routes/CustomRoutes'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>

      <div id="title"><Link to={'/'} className='link'>PokeDex</Link></div>

      <CustomRoutes />
    </>
  )
}

export default App;
