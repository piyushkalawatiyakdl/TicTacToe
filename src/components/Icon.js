import React from 'react';
import "../style.css";
import  {FaTimes,FaPen,FaCircle} from 'react-icons/fa'



const Icon = ( { name }) => {
  switch (name) {
    case 'circle':
        return <FaCircle className='icon'/>;
    case 'cross':
        return <FaTimes className='icon'/>  ;  
           
  
    default:
        return <FaPen className='icon'/> ;
  }
}

export default Icon;