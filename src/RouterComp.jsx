import {Link} from "react-router-dom";
import './CSS/router.css';

const RouterComp = ()=>{
    return (<>
        <div className="containerNav">
            <ul className="lsitPro">
                <Link className="proItem" to='/'><li>Cards</li></Link>
                <Link className="proItem" to='/forms'><li>Form</li></Link>
                <Link className="proItem" to='/accordion'><li>Accordion</li></Link>
                <Link className="proItem" to='/googlekeep'><li>Notes</li></Link>
                <Link className="proItem" to='/pokemonapi'><li>Pokemon Index</li></Link>
            </ul>
        </div>
    </>)
}

export default RouterComp;