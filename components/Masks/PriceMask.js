import { useState } from "react"
import NumberFormat from "react-number-format"

NumberFormat
const PriceMask = ({field,form,...props}) => {
  const [number, setNumber] = useState('')
  return(
    <NumberFormat {...field} {...props}  isNumericString={true}  thousandSeparator=" "  />
  )
}

export default PriceMask