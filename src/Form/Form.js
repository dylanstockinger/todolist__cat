import React from 'react';
import Button
 from '../Button/Button';
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

  export default Form