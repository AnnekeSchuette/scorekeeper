import styled from 'styled-components/macro'

export default function PlayerForm({onAddPlayer,handleAddPlayer}){
  return (
    <Form onSubmit={handleSubmit} onAddPlayer={handleAddPlayer}>
      <Label htmlFor="player">Add player:</Label>
      <Input id="player" type="text" name="player" placeholder="Player name" />
    </Form>
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

const Form = styled.form`
  display: grid;
`

const Label = styled.label`
 margin-bottom:5px;
`

const Input = styled.input`
  border: 1px solid #222;
  padding: 5px 10px;
  font-size: 1em;
`