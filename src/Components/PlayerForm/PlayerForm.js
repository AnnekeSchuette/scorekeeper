import './PlayerForm.css'

export default function PlayerForm({onAddPlayer}){
  return (
    <form className="PlayerForm" onSubmit={onAddPlayer}>
      <label className="PlayerForm__label" htmlFor="player">Add player:</label>
      <input className="PlayerForm__input" type="text" name="player" placeholder="Player name"></input>
    </form>
  )
}