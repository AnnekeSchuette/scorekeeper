import styled from 'styled-components/macro'
import GameForm from '../GameForm/GameForm'

export default function HistoryPage({createGame}){
 return (
   <Wrapper>
      <GameForm onCreateGame={createGame} />
   </Wrapper>
 )
}

const Wrapper = styled.section`
  display:grid;
  gap:20px;
`