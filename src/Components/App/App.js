import React from 'react';
import './App.css';
import PlayerForm from '../PlayerForm/PlayerForm';
import Button from '../Button/Button';
import Player from '../Player/Player';

export default function App() {
  return (
    <div className="App">
      <header className="AppHeader">Score Keeper</header>
      <PlayerForm
      onAddPlayer={(e) => {
        e.preventDefault();
        console.log('Form submitted');
        }} />
        <Player name={"John Doe"} score={20} onPlus={() => console.log('Plus!')} onMinus={() => console.log('Minus!')} />
        <Player name={"Jane Doe"} score={30} onPlus={() => console.log('Plus!')} onMinus={() => console.log('Minus!')} />
        <Button name={"Reset Scores"} />
        <Button name={"Reset All"} />
    </div>
  )
}