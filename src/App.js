import React, {useState} from 'react'

import './App.css';

const App = () =>  {
  const [name, setName] = useState('CJ');
  return (
    <div className="App">
       <form>
            <label>Enter your name:</label>
            <input onChange={(e) => {
              console.log(e.target.value);
            }}/>
       </form>
       <h1>Hello {name}</h1>
    </div>
  );
}

export default App;
