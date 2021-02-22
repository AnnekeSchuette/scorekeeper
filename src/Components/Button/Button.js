import React from 'react';
import './Button.css'

export default function Button({name, onClick, addClass}){

  return(
    <button onClick={onClick} className={addClass ? "Button " + addClass : "Button"}>{name}</button>
  )
}