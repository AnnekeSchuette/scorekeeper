import './PlayerForm.css'

export default function PlayerForm({onAddPlayer}){
  return (
    <form className="PlayerForm" onSubmit={onAddPlayer}>
      <label htmlFor="player">Add player:</label>
      <input type="text" name="player" placeholder="Player name"></input>
    </form>
  )
}