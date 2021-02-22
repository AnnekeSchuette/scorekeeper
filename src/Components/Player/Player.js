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
      <Button onClick={onMinus} name={"-"} />
      {score}
      <Button onClick={onPlus} name={"+"} />
    </section>
    )
}