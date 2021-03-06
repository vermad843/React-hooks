import React, {useState,useCallback, useEffect} from 'react'

import './App.css';

const App = () =>  {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);


  const onNewTodoChange = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);
  
  const formSubmitted = useCallback((e) => {
     e.preventDefault();
     setTodos([
       ...todos,
       {
         id : todos.length + 1,
         content : newTodo,
         done : false,
       }
     ]);
     setNewTodo('');
  }, [newTodo, todos]);

 
  useEffect(() => {
    console.log('todos', todos);
   
  },[todos]);

  return (
    <div className="App">
       <form onSubmit = {formSubmitted}>
            <label htmlFor = "newTodo">Enter a Todo:</label>
            <input
              id = "newTodo"
              name = "newTodo" 
              value = {newTodo}
              onChange = {onNewTodoChange}
             />
             <button type = "submit">Add Todo</button>
       </form>
          <ul>
             {todos.map((todo) => (
               <li key = {todo.id}>
                 <input type = "checkbox"/>
                 {todo.content}
               </li>
             ))}
          </ul>
    </div>
  );
}

export default App;
