import React from 'react';
import { useState } from 'react'
import './App.css';
import Header from '../Header/Header';
import PlayerForm from '../PlayerForm/PlayerForm';
import Button from '../Button/Button';
import Player from '../Player/Player';
import Navigation from '../Navigation/Navigation';
import GameForm from '../GameForm/GameForm';

import HistoryEntry from '../HistoryEntry/HistoryEntry';
function App() {

  const [players, setPlayers] = useState([])
  const [currentGame, setCurrentGame] = useState("")
  const [games, setGames] = useState([])

  function handleAddPlayer(name){
    setPlayers(oldPlayers => [...oldPlayers, {name, score: 0}])
  }

  function handleCreateGame(nameOfGame, playerNames){
    setPlayers([playerNames.map(player => ({name: player.name, score: 0}))])
    setCurrentGame(nameOfGame)
  }

  function saveGame(){
    setGames(oldGames => [...oldGames, {nameOfGame: currentGame, players: [players.map(player => player)]}])
    resetAll()
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

  function resetScore(){
    setPlayers(players.map(player => ({ ...player, score: 0 })))
  }

  console.log(currentGame, players, games)
  return (
    <div className="App">
      <Header title={"Score Keeper"} />
      <main className="AppMain">
        <PlayerForm
          key="playerform"
          onAddPlayer={handleAddPlayer}
        />

        {players.map((player, index) =>
          <Player
            key={player.index}
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
        <Button
          onClick={() => saveGame()}
          name={"End Game"}
        />

        <h3>Game Form</h3>
        <GameForm onCreateGame={handleCreateGame}/>

        <h3>History</h3>
        {games.map((nameOfGame, players) =>
            <HistoryEntry
            nameOfGame={nameOfGame}
            players={players}
            />
          )
        }

      </main>

      <Navigation />
    </div>
  )
}

export default App