import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

import Character from './components/Character'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [chars,setChars] = useState([])
  //const [currChar, setCurrChar] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
    .then(res => {
      console.log(res)
      setChars(res.data)
    })
    .catch(err => console.log(err))
  },[])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {chars.map((char,index) => <Character key = {index} name = {char.name}/>)}
    </div>
  );
}

export default App;
