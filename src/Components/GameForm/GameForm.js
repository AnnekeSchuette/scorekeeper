import './GameForm.css'
import Input from '../Input/Input'
import Button from '../Button/Button'

export default function GameForm({onCreateGame}){
  return (
    <form className="GameForm" onSubmit={handleSubmit}>
      <Input className={"GameForm__Field"} labelText={"Name of game"} inputName={"gamename"} placeholderText={"e.g. Carcassonne"} />
      <Input className="GameForm__Field" labelText={"Player names"} inputName={"playernames"} placeholderText={"e.g. John Doe, Jane Doe"} />
      <Button name={"Create game"} addClass={"GameForm__Button"} />
    </form>
  )

  function handleSubmit(event){
    event.preventDefault()
    const form = event.target
    const inputGame = form.elements.gamename
    const inputPlayers = form.elements.playernames
    const nameOfGame = inputGame.value
    const playerNames = inputPlayers.value.trim().split(',')
    onCreateGame(nameOfGame, playerNames)
    form.reset()
    inputGame.focus()
  }
}