import React from 'react';
import {useState} from 'react';


const Checkbox = () => {
    const [checked, setChecked] = useState(false);
    const onChange =(event) => {
      setChecked(event.target.checked)
       
    }
    return <div className='checkbox'>
      <input type="checkbox" checked={checked} onChange={onChange} />
  
    </div>
  };

  export default Checkbox
  