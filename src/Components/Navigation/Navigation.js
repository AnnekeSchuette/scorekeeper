import styled from 'styled-components/macro'
import {NavLink} from "react-router-dom";
import Button from '../Button/Button'

export default function Navigation({
  pages
}){

  return(
    <NavigationGrid pages={pages}>
      {pages.map(({name, path}) => (
        <Button
          as={NavLink}
          key={name}
          exact
          to={path}
        >
          {name}
        </Button>
      ))}
    </NavigationGrid>
  )
}

const NavigationGrid = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap:1px;

  button {
    flex:1 1 auto;
    border-radius: 0;
    margin:0;
  }
`