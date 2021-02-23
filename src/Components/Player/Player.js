import './Player.css';
import Button from '../Button/Button';

export default function Player({
  name,
  score,
  onMinus,
  onPlus
}){
  return(
    <section className="Player">
      {name}
      {onMinus && <Button onClick={onMinus} name={"-"} />}
      {score}
      {onMinus && <Button onClick={onPlus} name={"+"} />}
    </section>
    )
}