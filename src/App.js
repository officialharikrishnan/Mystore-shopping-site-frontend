import React, {useState} from 'react'
import axios from 'axios'
import './App.css';

function App() {
  const [state,setState]=useState()
  function click(){
     axios.get("/new").then((response)=>{
      console.log(response)
      setState(response.data)
     })
    
  }
  return (
    <div  className="App">
      <h1>hello</h1>
      <button onClick={click}>press</button>
      <h1>{state}</h1>
      
    </div>
  );
}

export default App;
