import { Link } from "react-router-dom";    
import "./Pokemon.css";
function Pokemon({ name, image, id }) {
    return (
        <div className="pokemon-wrapper">
            <Link to={`/pokemon/${id}`}  className="link">
            <div className='pokeName'>{id}. {name}</div>
            <div className="image-box"><img src={image} alt={name} className='image' /></div>
            </Link> 


        </div>
    )
}
export default Pokemon;