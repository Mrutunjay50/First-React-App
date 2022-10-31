 const PokemonDetail = (props)=>{
    return (<>
        <h4>Current Pokemon Data</h4>
        <h5>{props.name}</h5>
        <div className="PokCont">
            <div style={{display:'flex',justifyContent:"space-between"}}><div><b>Attribute</b></div><div><b>Total Moves</b></div></div>
            <div style={{display:'flex',justifyContent:"space-between"}}><div className="Attr">{props.Attr}</div><div>{props.nMov}</div></div>
            <div className="contentPok">
            <p>Height : {((props.height*10)/30.48).toPrecision(3)} f</p>
            <p>Weight : {(props.weight)/10} kg</p>
            <div className="AllMov">All the moves <br  /> {props.aMov}</div>
            </div>
        </div>
    </>);
 }

export default PokemonDetail;