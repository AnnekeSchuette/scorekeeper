import React from 'react'
import { useState } from 'react'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import AppHeader from '../AppHeader/AppHeader'
import CreatePage from '../CreatePage/CreatePage'
import GamePage from '../GamePage/GamePage'
import HistoryPage from '../HistoryPage/HistoryPage'
import NavigationGrid from '../Navigation/Navigation'
import Button from '../Button/Button'

function App() {

  const [players, setPlayers] = useState([])
  const [nameOfGame, setNameOfGame] = useState('')
  const [currentPage, setCurrentPage] = useState('Play')
  const [history, setHistory] = useState([])
  const [title, setTitle] = useState('Score keeper')
  const pages = ['Play', 'History']

  return (
    <AppGrid>
      <AppHeader>{title}</AppHeader>
      <AppMain>

        {(currentPage === 'Play') && <CreatePage createGame={createGame} />}

        {(currentPage === 'Game') && <GamePage
            players={players}
            handleMinus={handleMinus}
            handlePlus={handlePlus} r
            esetScore={resetScore}
        />}

        {(currentPage === 'History') && <HistoryPage history={history} />}
      </AppMain>

      {/* while game is running, show "End game" button, otherwise navigation */}
      {currentPage === 'Game' ?
        <Button onClick={endGame}>End Game</Button>
      :
        <NavigationGrid pages={pages} currentPage={currentPage} onNavigate={setCurrentPage}></NavigationGrid>
      }
  </AppGrid>
  )


  function createGame({ nameOfGame, playerNames }) {
    // playerNames is ['Jane', 'John']
    setNameOfGame(nameOfGame)
    setPlayers(playerNames.map(name => ({ name, score: 0 })))
    setCurrentPage('Game')
    setTitle(nameOfGame)
  }

  function endGame() {
    setHistory([{ players, nameOfGame, id: uuidv4() }, ...history])
    setPlayers([])
    setNameOfGame('')
    setCurrentPage('Play')
    setTitle('Play')
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

  function resetScore(){
    setPlayers(players.map(player => (
      { ...player, score: 0 }
      )
    ))
  }
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