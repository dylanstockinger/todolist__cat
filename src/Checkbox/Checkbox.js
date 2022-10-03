import React from 'react';
import {useState} from 'react';


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

  export default Checkbox
  