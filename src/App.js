
// import logo from './logo.svg';
import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Navbar from './Components/navbar';
import {Demm} from './Components/List';
import Forms from './Components/forms';
import Accordion from './Components/accordion';
import GoogleKeep from './Components/GoogleKeepClone/googleKeep';
import PokeApi from './Components/PokemoN-Api/PokeApi';
import RouterComp from './RouterComp';
import './CSS/getPoke.css';

function App() {
  return(
  <>
  <Navbar  />
  <RouterComp />
  <Routes>
    <Route exact path='/' element={<Demm/>} />
    <Route exact path='/forms' element={<Forms/>} />
    <Route exact path='/accordion' element={<Accordion/>} />
    <Route exact path='/googlekeep' element={<GoogleKeep/>} />
    <Route exact path='/pokemonapi' element={<PokeApi/>} />
  </Routes>

  </>
  );
}


export default App;