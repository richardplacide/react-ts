import React, { useState, useReducer } from 'react';
import './App.css';
import InputField from './components/InputField';
import TodoList from './components/TodoList';
import { Todo } from './model';
import { todosReducer} from './todoReducer';


const App: React.FC = () => {


  
 
  // > Can't make state object work with current useReducer implementation
  // > useState for single todo state and useReducer for Todos[]
  /* const initialState: IState = {
    todo: "",
    todos: todos
  } */

  const initialState:Todo[] = []
  

  const [todo, setTodo] = useState<string>("");
  
  const [state, dispatch] = useReducer(todosReducer, initialState)
  

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} dispatch={dispatch} />
      <TodoList todos={state} dispatch={dispatch} />
    </div>
  );
}
/* function App() {
  return (
    <div className="App">
      <p>Hello React Typescript World</p>
      
    </div>
  );
} */

export default App;
