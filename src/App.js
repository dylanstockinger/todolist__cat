import './App.css';
import React,{useState} from "react";
import './app.scss'

// Wrap every letter in a span


function App() {
  const [todos, setTodos] = useState ([]);
  return (
    <div className="app-wrapper">
      
      <h1> TO DO LIST </h1>

      <Form addTodo={todo => {
        setTodos(prev => [...prev, todo])
      } }/>
    <div className='todo-list' >
      {todos.map((todo, i) =>(
        <Todo onDelete={()=> {
          setTodos(prev =>{
            return prev.filter((_, y) => i !== y)
          });
        }} key={i}
        >
          {todo}
          
          
          </Todo>
      ))}
      
      </div>
      </div>
  );
}

const Form = ({addTodo}) => {
  const onSubmit = (event) => {
    event.preventDefault()

    
  
    const todoText = event.currentTarget.elements.todo.value;
    addTodo(todoText);
    event.currentTarget.reset();
  }
  return <form className='form-wrapper' onSubmit={onSubmit}> 
    <input id="todo" className='input' type="text" placeholder=""></input>
   
   
    <Button type="submit"> Ajouter </Button>
  </form>
};

const Button = ({children, ...props}) => {
  return <button className='button'{...props}>
    {children} 
  </button>
}

const Todo = ({children, onDelete}) => {
  return (
  <div className='todo-wrapper'>
       <Checkbox />
       <span className='todo-text'> {children} </span>
       <button onClick={onDelete}className='todo-delete'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16"> <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/> <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/> </svg></button>

  
  </div>
  );
};

const Checkbox = () => {
  const [checked, setChecked] = useState(false);
  const onChange =(event) => {
    setChecked(event.target.checked)
     
  }
  return <div className='checkbox'>
    <input type="checkbox" checked={checked} onChange={onChange} />
  {checked && (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-.997-6l7.07-7.071-1.414-1.414-5.656 5.657-2.829-2.829-1.414 1.414L11.003 16z"/> </g> </svg>

  )}

  </div>
};



export default App;
