import styled from 'styled-components/macro'

export default styled.button`
  background-color: ${props => (props.isActive ? 'hotpink' : '#222')};
  color:#fff;
  border:none;
  border-radius:3px;
  padding:5px 15px;
  margin: 5px;
  font-size: 1em;
`