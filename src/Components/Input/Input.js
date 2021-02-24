import styled from 'styled-components/macro'

export default function Input({
  labelText,
  inputName,
  className,
  placeholderText
}){
  return (
    <div className={"Input " + className}>
      <InputLabel>{labelText}
        <InputField type="text" name={inputName} placeholder={placeholderText} />
      </InputLabel>
    </div>
  )
}

const InputField = styled.input`
  border: 1px solid #222;
  padding: 5px 10px;
  font-size: 1em;
`
const InputLabel = styled.label`
  color:#222;
`