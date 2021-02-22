import './Navigation.css'
import Button from '../Button/Button'

export default function Navigation(){
  // const active = false
  // const btnClasses = active ? "Navigation__Button Navigation__Button--active" : "Navigation__Button"

  return(
    <nav className="Navigation">
      <Button addClass={"Navigation__Button"} name={"Play"} />
      <Button addClass={"Navigation__Button Navigation__Button--active"} name={"History"} />
    </nav>
  )
}