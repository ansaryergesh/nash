import Head from 'next/head'
import {useState} from 'react'
import InputMask from 'react-input-mask'
import Nav from '../components/shared/Nav'

const ResetPassword = () => {
  const [phone,
    setPhone] = useState('')
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='getservice'>
      <Head>
        <title>Сброс пароля</title>
      </Head>
      <div className='header'>
        <Nav/>
        <div className='bg'></div>
      </div>
      <div className='container'>
        <div className='form_service'>
          <div className='form_register'>
            <form onSubmit={e => onSubmit(e)}>
              <h2 className='formheader'>Сброс пароля</h2>
              <InputMask
                type='tel'
                placeholder='Введите телефон номер'
                name='phone'
                mask="+7(999)999-99-99"
                maskChar={null}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}/>
              <div className='firststep_banner'>
                <div className='firststep_banner--button'>
                  <input
                    className='singlebtn'
                    type='submit'
                    className='button'
                    value='Сбросить'/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword