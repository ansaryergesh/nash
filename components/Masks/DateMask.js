import { useState } from 'react';
import InputMask from 'react-input-mask'
const DateMask = ({
  field,
  form,
  ...props
}) => {

  const getPhone = value => {
    const defaultMask = "99.99.9999";
    return defaultMask
  }
  const [items,setItems] = useState({
    value: '',
    mask: getPhone()
  })

  return(
  <InputMask
    {...items}
    maskChar={null}
    className="my-input"
    {...field}
    {...props}/>
  )
}

export default DateMask