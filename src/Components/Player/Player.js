import styled from 'styled-components/macro'
import Button from '../Button/Button';

export default function Player({
  name,
  score,
  onMinus,
  onPlus
}){
  return(
    <PlayerStyled score={score}>
      {name}
      <Button onClick={onMinus}>-</Button>
      <span>{score}</span>
      <Button onClick={onPlus}>+</Button>
    </PlayerStyled>
    )
}

const PlayerStyled = styled.section`

  & span {
    color: hsl(${props => Math.min(props.score * 15, 100)}, 70%, 50%);
  }
`