import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react"
import InputMask from 'react-input-mask'
import swal from "sweetalert";
import { handleFocus } from "../../defaults/extraFunction";
import Loader from "../loader/Loader";
import PhoneMask from "../Masks/PhoneMask";

const FeedbackForm = () => {
  const [date,setDate] = useState({fio: '', phone: '', comment: '', iin: ''})
  const [error,setError] = useState('')
  const [loading,setLoading] = useState(false)
  useEffect(() => {
    if(error) {
      handleFocus()
    }
  },[error])
  const onSubmit = (e) => {
    e.preventDefault()
    
    setLoading(true)
    setError('')
    axios.get(`${process.env.BASE_URL}/addFeedback`, {params: date})
      .then(res=> {
        setDate({fio: '', phone: '', comment: '', iin: ''})
        setLoading(false)
        console.log(res)
        if(res.data.success) {
          swal("Спасибо за ваш отзыв", `Ваш отзыв успешно отправлен`, "success").then(() => {
            Router.push('/')})
        }else {
          setError(res.data.message)
          
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false)
      })
  }
  const onChange=e=> {
    const name = e.target.name;
    setDate({...date, [name]: e.target.value})
  }
  return (
    <div className='form_register'>
      {loading && <Loader />}
      <form onSubmit={(e) => onSubmit(e)}>
        {error && <div className='alert-error text-danger'>{error}</div>}
        <input name='fio' type='text' className='capitalize' value={date.fio} onChange={e=>onChange(e)} placeholder='ФИО'></input>
        <InputMask type='tel' placeholder='Введите ИИН' name='iin' mask="999999999999" maskChar={null} value={date.iin} onChange={(e) => onChange(e)} />
        <InputMask type='tel' placeholder='Введите телефон номер' name='phone' mask="+7(999)-999-9999" maskChar={null} value={date.phone} onChange={(e) => onChange(e)} />
        <textarea placeholder='Отзыв' name='comment' onChange={e=>onChange(e)} value={date.comment}></textarea>
        <input
          className='singlebtn'
          type='submit'
          className='button'
          value='Отправить'/>
      </form>
    </div>
  )
}

export default FeedbackForm