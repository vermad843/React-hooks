import React, {useState,useCallback, useEffect} from 'react'

import './App.css';

const App = () =>  {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);


  const onNewTodoChange = useCallback((e) => {
    setNewTodo(e.target.value);
  }, []);
  
  const formSubmitted = useCallback((e) => {
     e.preventDefault()
     if(!newTodo.trim()) return;
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


  const addTodo = useCallback((todo,index) => (e) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1, {
        ...todo,
        done : !todo.done
    });
    setTodos(newTodos);
  }, [todos]);

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
             {todos.map((todo, index) => (
               <li key = {todo.id} className = {todo.done ? 'done' : ''}>
                 <input 
                   checked = {todo.done}
                   type = "checkbox"
                   onChange = {addTodo(todo, index)}  
                 />
                <span>{todo.content}</span> 
               </li>
             ))}
          </ul>
    </div>
  );
}

export default App;
