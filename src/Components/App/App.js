import React from 'react';
import { useState } from 'react'
import './App.css';
import PlayerForm from '../PlayerForm/PlayerForm';
import Button from '../Button/Button';
import Player from '../Player/Player';

function App() {

  const [players, setPlayers] = useState([])

  function handleAddPlayer(name){
    setPlayers(oldPlayers => [...oldPlayers, {name, score: 0}])
  }

  function handlePlus(index){
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score + 1 },
      ...players.slice(index + 1),
    ])
  }

  function handleMinus(index){
    setPlayers(players => [
      ...players.slice(0, index),
      { ...players[index], score: players[index].score - 1 },
      ...players.slice(index + 1),
    ])
  }

  function resetAll(){
    setPlayers([])
  }

  function resetScore(name){
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  return (
    <div className="App">
      <header className="AppHeader">Score Keeper</header>
      <main className="AppMain">
        <PlayerForm
          onAddPlayer={handleAddPlayer}
        />

        {players.map((player, index) =>
          <Player
            name={player.name}
            score={player.score}
            onPlus={() => handlePlus(index)}
            onMinus={() => handleMinus(index)}
          />
        )}

        <Button
          onClick={resetScore}
          name={"Reset Scores"}
        />
        <Button
          onClick={resetAll}
          name={"Reset All"}
        />
      </main>
    </div>
  )
}
export default App