function Pokemon({ name , image, id }) {
    return (
        <div className="pokemon-wrapper">
            <div>{id} {name}</div>
            <div><img src={image} alt={name} /></div>
            
        </div>
    )
}
export default Pokemon;