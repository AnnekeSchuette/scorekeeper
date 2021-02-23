import Player from '../Player/Player'
import './HistoryEntry.css'

export default function HistoryEntry(
  {
    nameOfGame,
    gamePlayers
  }
){
  //const test = players.map(({player, score}, index) => {player, score, index})

  //const playerObject = players

  return (
    <section>
      <h3>{nameOfGame}</h3>
      {gamePlayers && gamePlayers.map(({player, score}, index) =>
        <Player
          key={player}
          name={player}
          score={score}
        />
      )}
    </section>
  )
}