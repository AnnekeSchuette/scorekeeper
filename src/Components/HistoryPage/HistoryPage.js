import styled from 'styled-components/macro'
import HistoryEntry from '../HistoryEntry/HistoryEntry'

export default function HistoryPage({
  history
}){
 return (
   <Wrapper>
    {history.map(({ nameOfGame, players, id }) => (
      <HistoryEntry key={id} nameOfGame={nameOfGame} players={players} />
    ))}
   </Wrapper>
 )
}

const Wrapper = styled.section`
  display:grid;
  gap:20px;
`