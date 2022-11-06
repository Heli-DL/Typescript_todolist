import { ITodo } from './interfaces';

interface Props {
    todos: ITodo[];
    deleteTodo: (index: number) => void;
  }

export default function TodoTable({ todos, deleteTodo}: Props){
    
  return(
    <div>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Date</th>
            <th>Priority</th>
          </tr>
        </thead>
        <tbody>
          {
            todos.map((todo: any, index: number) =>
              <tr key={index}>
                <td>{todo.desc}</td>
                <td>{todo.date}</td>
                <td>{todo.priority}</td>
                <td><button onClick={()=> deleteTodo(index)}>Delete</button></td>
              </tr>
              )
              }
          </tbody>
      </table>
    </div>
  );
}