import React from 'react';
import { useState } from 'react'
import styled from 'styled-components/macro'
import AppHeader from '../AppHeader/AppHeader';
import PlayerForm from '../PlayerForm/PlayerForm';
import Button from '../Button/Button';
import NavigationGrid from '../Navigation/Navigation';
import GameForm from '../GameForm/GameForm';
import Player from '../Player/Player';
import HistoryEntry from '../HistoryEntry/HistoryEntry';

function App() {

  const [activeIndex, setActiveIndex] = useState(0)
  const [players, setPlayers] = useState([])
  const [currentGame, setCurrentGame] = useState("")
  const [games, setGames] = useState([])
  const [title, setTitle] = useState("Score keeper")

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
    <AppGrid>
      <AppHeader>{title}</AppHeader>
      <AppMain>
        {/* old player form */}
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
      </AppMain>

      {/* while game is running, show "End game" button, otherwise navigation */}
      {currentGame ?
        <Button
            onClick={handleSaveGame}
            name={"End Game"}
          />
      :
        <NavigationGrid>
          <Button onClick={resetScore}>Reset Scores</Button>
          <Button onClick={resetAll}>Reset All</Button>
        </NavigationGrid>
      }
  </AppGrid>
  )
}

const AppGrid = styled.div`
  text-align: center;
  max-width: 375px;
  margin: 0 auto;
`

const AppMain = styled.main`
  padding:20px;
  display: grid;
  gap:10px;
`

export default App