import './PlayerForm.css'

export default function PlayerForm({onAddPlayer}){
  return (
    <form className="PlayerForm" onSubmit={handleSubmit}>
      <label className="PlayerForm__label" htmlFor="player">Add player:</label>
      <input className="PlayerForm__input" type="text" name="player" placeholder="Player name"></input>
    </form>
  )

  function handleSubmit(event){
    event.preventDefault()
    const form = event.target
    const input = form.elements.player
    const name = input.value
    onAddPlayer(name)
    form.reset()
    input.focus()
  }
}