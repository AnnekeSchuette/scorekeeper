import './Navigation.css'
import Button from '../Button/Button'

export default function Navigation({
  pages,
  activeIndex,
  onNavigate
}){
  // const active = false
  // const btnClasses = active ? "Navigation__Button Navigation__Button--active" : "Navigation__Button"

  return(
    <nav className="Navigation">

      {pages.map((page, index) => (
        <Button
          key={page}
          disabled={index === activeIndex}
          onClick={() => onNavigate(index)}
          addClass={index === activeIndex ? "Navigation__Button Navigation__Button--active" : "Navigation__Button"}
          name={page}
        />
      ))}
    </nav>
  )
}