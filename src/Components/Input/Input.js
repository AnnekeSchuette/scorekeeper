import './Input.css'

export default function Input({
  labelText,
  inputName,
  className,
  placeholderText
}){
  return (
    <div className={"Input " + className}>
      <label className={"Input__Label"}>{labelText}
        <input className={"Input__Field"} type="text" name={inputName} placeholder={placeholderText} />
      </label>
    </div>
  )
}