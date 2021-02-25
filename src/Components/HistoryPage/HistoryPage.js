import HistoryEntry from '../HistoryEntry/HistoryEntry'
import styled from 'styled-components/macro'

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