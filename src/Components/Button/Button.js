import React from 'react';
import './Button.css'

export default function Button({name, onClick, className = '' }){

  return(
    <button onClick={onClick} className={'Button ' + className}>{name}</button>
  )
}