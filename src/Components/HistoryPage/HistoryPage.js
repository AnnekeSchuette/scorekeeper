import HistoryEntry from '../HistoryEntry/HistoryEntry'
import './HistoryPage.css'

export default function HistoryPage({players, nameOfGame}){
 return (
  <HistoryEntry players={players} nameOfGame={nameOfGame} />
 )
}