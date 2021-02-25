import Input from '../Input/Input'
import Button from '../Button/Button'
import styled from 'styled-components'

export default function GameForm({onCreateGame}){
  return (
    <FormGrid onSubmit={handleSubmit}>
      <Input
        className="GameForm__Field"
        labelText="Name of game"
        inputName="nameOfGame"
        placeholderText="e.g. Carcassonne"
      />
      <Input
        className="GameForm__Field"
        labelText="Player names"
        inputName="playerNames"
        placeholderText="e.g. John Doe, Jane Doe"
      />
      <Button addClass={"GameForm__Button"}>Create game</Button>
    </FormGrid>
  )

  function handleSubmit(event){
    event.preventDefault()
    const form = event.target
    const {nameOfGame, playerNames} = form.elements

    onCreateGame({
      nameOfGame: nameOfGame.value,
      playerNames: playerNames.value.split(',').map(name => name.trim()),
    })

    form.reset()
    nameOfGame.focus()
  }
}

const FormGrid = styled.form`
  display:grid;
  gap:20px;
`