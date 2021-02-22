import React from 'react';
import { useState } from 'react'
import './App.css';
import Header from '../Header/Header';
import PlayerForm from '../PlayerForm/PlayerForm';
import Button from '../Button/Button';
import Player from '../Player/Player';
import Navigation from '../Navigation/Navigation';
import GameForm from '../GameForm/GameForm';

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

  function handleCreateGame(gameName, playerNames){
    console.log(gameName, playerNames)
  }

  return (
    <div className="App">
      <Header title={"Score Keeper"} />
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

        <h3>Game Form</h3>
        <GameForm onCreateGame={handleCreateGame}/>

      </main>

      <Navigation />
    </div>
  )
}

export default App