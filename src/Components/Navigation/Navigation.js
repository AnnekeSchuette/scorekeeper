import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function Navigation({
  pages,
  currentPage,
  setCurrentPage,
  onNavigate
}){

  return(
    <NavigationGrid pages={pages} currentPage={currentPage} onNavigate={setCurrentPage}>
      {pages.map((page) => (
        <Button
          key={page}
          isActive={page === currentPage}
          onClick={() => onNavigate(page)}
          name={page}
        >{page}</Button>
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