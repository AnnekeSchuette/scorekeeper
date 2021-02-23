import React from 'react';
import { useState } from 'react'
import styled from 'styled-components/macro'
import AppHeader from '../AppHeader/AppHeader';
import PlayerForm from '../PlayerForm/PlayerForm';
import Button from '../Button/Button';
import Player from '../Player/Player';

function App() {

  const [players, setPlayers] = useState([])
  const [title, setTitle] = useState("Score keeper")

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
    <AppGrid>
      <AppHeader>{title}</AppHeader>
      <AppMain>
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
        <NavigationGrid>
          <Button onClick={resetScore}>Reset Scores</Button>
          <Button onClick={resetAll}>Reset All</Button>
        </NavigationGrid>
      </AppMain>
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

const NavigationGrid = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default App