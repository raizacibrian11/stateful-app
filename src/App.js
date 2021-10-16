import logo from './logo.svg';
import './App.css';
import React,{useState,useEffect,useRef} from 'react';

function App() {
    const names =  localStorage;
    const [name,setName] = useState(()=>{
    return names.getItem('name');
  });
  
  
  function handleNewName(e){
    setName(e.target.value);
  }
  return (
    <div className="App">
      <form className="document">
         <label htmlFor="input"> Inserta tu nombre: </label>
          <input type="text" id="name" onChange={handleNewName}/>
          <p>
            ¡Holi holi holi {name}! Es un placer saludarte.
          </p>
      </form>
    </div>
  );
}
export default App;
