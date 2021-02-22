import React from 'react';
import './Button.css'

export default function Button({name, onClick}){
  return(
    <button onClick={onClick} className="Button">{name}</button>
  )
}