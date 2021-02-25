import styled from 'styled-components/macro'
import Player from '../Player/Player'

export default function HistoryEntry(
  {
    nameOfGame,
    players
  }
){
  //const test = players.map(({player, score}, index) => {player, score, index})

  //const playerObject = players

  return (
    <Wrapper>
      <h3>{nameOfGame}</h3>
      {players && players.map((player, index) =>
        <Player key={index} name={player.name} score={player.score}
        />
      )}
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
  background-color:#eee;
  padding:20px;

  h3{
    margin:0px;
  }
`