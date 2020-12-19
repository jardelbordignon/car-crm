import MaskedInput from 'react-text-mask'

const CustomMaskedInput = props => {
  const { inputRef, ...other } = props
  let mask = [/[0-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/]

  return (
    <MaskedInput
      {...other}
      ref={ ref => {
        inputRef(ref ? ref.inputElement : null)
      }}
      mask={ mask }
      guide={ false }
    />
  )
}

export default CustomMaskedInput
