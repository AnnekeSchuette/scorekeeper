import styled from 'styled-components'
import Button from '../Button/Button'

export default function Navigation({
  pages,
  activeIndex,
  onNavigate
}){
  // const active = false
  // const btnClasses = active ? "Navigation__Button Navigation__Button--active" : "Navigation__Button"

  return(
    <NavigationGrid>
      {pages.map((page, index) => (
        <Button
          key={page}
          isActive={index === activeIndex}
          onClick={() => onNavigate(index)}
          className={index === activeIndex ? "Navigation__Button Navigation__Button--active" : "Navigation__Button"}
          name={page}
        />
      ))}
    </NavigationGrid>
  )
}

const NavigationGrid = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
