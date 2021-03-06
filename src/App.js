import React, {useState,useCallback} from 'react'

import './App.css';

const App = () =>  {
  const [name, setName] = useState('CJ');

const onNameChange = useCallback((e) => {
  setName(e.target.value);
}, []);

  return (
    <div className="App">
       <form>
            <label>Enter your name:</label>
            <input 
              value = {name}
              onChange = {onNameChange}
             />
       </form>
       <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
