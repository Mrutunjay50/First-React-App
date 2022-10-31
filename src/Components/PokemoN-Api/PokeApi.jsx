import axios from 'axios';
import React,{useState,useEffect} from 'react';
import PokemonDetail from './PokemonDetail';
import Button from '@mui/material/Button';



const PokeApi = () =>{
    const[id,setId] = useState(Math.floor(Math.random() * 905));
    const[name,setName] = useState({
        "name" : "",
        "move" : [""]
    });
    const[moves,setMove] = useState({
        "type" : "",
        "NumMov" : "",
        "AllMov" : ""
    });
    const[Dimen, setDimen] = useState({
        "Height" : "",
        "Weight" : ""
    })

    useEffect(() =>{
        async function getVal() {
            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
            const PokeMov = response.data.moves;
            const Mov = Math.floor(Math.random() * PokeMov.length);
            const AllMov = PokeMov.map((item) => item.move.name);
            const typeA = response.data.types.map((item) => item.type.name);
            console.log(AllMov);
            setDimen({
                "Height" : response.data.height,
                "Weight" : response.data.weight
            })
            setName({
                "name" : response.data.name.toUpperCase(),
                "move" : PokeMov[Mov].move.name
            });
            setMove({
                "type" : typeA.join(", "),
                "NumMov" : PokeMov.length,
                "AllMov" : AllMov.join("}, {")
            });
        }

        getVal();
    },[id]);

    const changeVal = ()=>{
        setId(Math.floor(Math.random() * 905));
    }

    return (<>
    <div className="Poke">
        <div className="mainPoke">
        <div className="ShowPoke">
        <p>Go {name.name}, I choose you!!</p>
        <p>Attack with {name.move}</p>
        </div>
        <Button onClick={changeVal}>New Pokemon</Button>
        <div className="allCPoke">
        <PokemonDetail name={name.name} height={Dimen.Height} weight={Dimen.Weight} Attr={moves.type} nMov={moves.NumMov} aMov={moves.AllMov}/>
        </div>
        </div>
    </div>
    </>);
}

export default PokeApi;