import styled from 'styled-components/macro'

export default function Input({
  labelText,
  name,
  className,
  placeholderText,
  id
}){
  return (
    <InputWrapper className={"Input " + className}>
      <InputLabel htmlFor={id}>{labelText}</InputLabel>
      <InputField id={id} type="text" name={name} placeholder={placeholderText} />
    </InputWrapper>
  )
}

const InputWrapper = styled.div`
  display:grid;
`
const InputField = styled.input`
  border: 1px solid #222;
  padding: 5px 10px;
  font-size: 1em;
`
const InputLabel = styled.label`
  color:#222;
`