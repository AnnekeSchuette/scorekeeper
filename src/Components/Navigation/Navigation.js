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
          isActive={index === activeIndex}
          onClick={() => onNavigate(index)}
          className={index === activeIndex ? "Navigation__Button Navigation__Button--active" : "Navigation__Button"}
          name={page}
        />
      ))}
    </nav>
  )
}