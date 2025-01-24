
import  "./Pokemon.css";
function Pokemon({ name , image, id }) {
    return (
        <div className="pokemon-wrapper">
            <div className='pokeName'>{id}. {name}</div>
            <div className="image-box"><img src={image} alt={name} className='image'/></div>
            
        </div>
    )
}
export default Pokemon;