import React, {useState} from 'react';
import Todotable from './Todotable';
import { ITodo } from './interfaces';



export default function Todolist() {

  const [todo, setTodo] = useState<ITodo>({} as ITodo);
  const [todos, setTodos] = useState<Array<ITodo>>([]);

  const inputChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTodos([...todos, todo]);
  }

  const deleteTodo = (index: number) => {
    const updatedTodos = todos.filter((todo, i) => i !== index);
    setTodos(updatedTodos);
  }

  return(
    <div>
      <form onSubmit={addTodo}>
        <input type="text"name="desc" value={todo.desc || ''} onChange={inputChanged} placeholder="Description"/>
        <input type="text " name="date" value={todo.date || ''} onChange={inputChanged} placeholder="Date"/>
        <input type="text" name="priority" value={todo.priority || ''} onChange={inputChanged} placeholder="Priority"/>
        <input type= "submit" value="Add"/>
      </form>
    <Todotable todos={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}