import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'

export default function AddPlayer({
  resetScore,
  players,
  handleMinus,
  handlePlus,
  resetAll,
  setPlayers
}){
  return  <>
    <PlayerForm
      key="playerform"
      onAddPlayer={handleAddPlayer}
    />

    {players && players.map((player, index) =>
      <Player
        key={player.index}
        name={player.name}
        score={player.score}
        onPlus={() => handlePlus(index)}
        onMinus={() => handleMinus(index)}
      />
    )}

    <Button onClick={resetScore}>
      Reset Scores
    </Button>

    <Button onClick={resetAll}>
      Reset All
    </Button>

  </>

  function handleAddPlayer(name){
    setPlayers(oldPlayers => [...oldPlayers, {name, score: 0}])
  }
}
