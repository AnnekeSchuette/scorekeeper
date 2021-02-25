import styled from 'styled-components/macro'
import Player from '../Player/Player'
import Button from '../Button/Button'

export default function GamePage({players, handlePlus, handleMinus, resetScore}){
 return (
   <Wrapper>
      {players && players.map(({name, score}, index) =>
        <Player
          key={index}
          name={name}
          score={score}
          onPlus={() => handlePlus(index)}
          onMinus={() => handleMinus(index)}
        />
      )}
      <Button onClick={resetScore}>Reset Scores</Button>
   </Wrapper>
 )
}

const Wrapper = styled.section`
  display:grid;
  gap:20px;
`