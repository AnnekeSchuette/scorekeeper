import React from 'react';
import { useState } from 'react'
import './App.css';
import Header from '../Header/Header';
import Button from '../Button/Button';
import Navigation from '../Navigation/Navigation';
import GameForm from '../GameForm/GameForm';
import Player from '../Player/Player';
import HistoryEntry from '../HistoryEntry/HistoryEntry';

function App() {

  const [activeIndex, setActiveIndex] = useState(0)
  const [players, setPlayers] = useState([])
  const [currentGame, setCurrentGame] = useState("")
  const [games, setGames] = useState([])

  function handleAddPlayer(name){
    setPlayers(oldPlayers => [...oldPlayers, {name, score: 0}])
  }

  function handleCreateGame(nameOfGame, playerNames){
    setPlayers(playerNames.map(player => ({player, score: 0})))
    setCurrentGame(nameOfGame)
  }

  function handleSaveGame(){
    setGames(oldGames => [
      ...oldGames, {
        nameOfGame: currentGame,
        players: players.map((player, index) => player[index])
      }]
      )
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
    setCurrentGame("")
  }

  function resetScore(){
    setPlayers(players.map(player => (
      { ...player, score: 0 }
      )
    ))
  }

  return (
    <div className="App">
      <Header title={"Score Keeper"} />
      <main className="AppMain">

        {(activeIndex === 0 && !currentGame) &&
          <section>
            <h3>Game Form</h3>
            <GameForm key="gameform" onCreateGame={handleCreateGame}/>
          </section>
        }

      {(activeIndex === 0 && currentGame) &&
          <section key="currentgame">
            <h3>Play Game</h3>
            {players && players.map(({player, score}, index) =>
              <Player
                key={index}
                name={player}
                score={score}
                onPlus={() => handlePlus(index)}
                onMinus={() => handleMinus(index)}
              />
            )}

            <Button
              onClick={resetScore}
              name={"Reset Scores"}
            />

          </section>
        }

        {(activeIndex === 1) &&
          <section key="history">
            <h3>History</h3>
            {games && games.map(({nameOfGame, players}, index) =>
                <HistoryEntry
                nameOfGame={nameOfGame}
                gamePlayers={players}
                />)
            }
          </section>
        }
      </main>

      {/* while game is running, show "End game" button, otherwise navigation */}
      {currentGame ?
        <Button
            onClick={handleSaveGame}
            name={"End Game"}
          />
      :
        <Navigation
          onNavigate={index => setActiveIndex(index)}
          activeIndex={activeIndex}
          pages={['Play', 'History']}
        />
      }
    </div>
  )
}

export default App