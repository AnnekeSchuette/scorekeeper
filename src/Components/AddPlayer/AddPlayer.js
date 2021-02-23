import './AddPlayer.css'
import PlayerForm from '../PlayerForm/PlayerForm'
import Player from '../Player/Player'
import Button from '../Button/Button'


export default function AddPlayer({
  resetScore,
  handleAddPlayer,
  players,
  handleMinus,
  handlePlus,
  resetAll
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

<Button
  onClick={resetScore}
  name={"Reset Scores"}
/>

<Button
  onClick={resetAll}
  name={"Reset All"}
/>

</>
}
