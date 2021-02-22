import Player from '../Player/Player'
import './HistoryEntry.css'

export default function HistoryEntry(
  {
    nameOfGame,
    players
  }
){
  return (
    <section>
      <h3>{nameOfGame}</h3>
      {players.map((player, index) =>
          <Player
            key={index}
            name={player.name}
            score={player.score}
          />
        )}
    </section>
  )
}