import HistoryEntry from '../HistoryEntry/HistoryEntry'

export default function HistoryPage({
  players, nameOfGame, id
}){
 return (
  <HistoryEntry players={players} nameOfGame={nameOfGame} id={id} />
 )
}