import styled from 'styled-components/macro'

<<<<<<< HEAD
export default function Button({name, onClick, className = '' }){

  return(
    <button onClick={onClick} className={'Button ' + className}>{name}</button>
  )
}
=======
export default styled.button`
  background: #222;
  color:#fff;
  border:none;
  border-radius:3px;
  padding:5px 15px;
  margin: 5px;
  font-size: 1em;
`
>>>>>>> main
