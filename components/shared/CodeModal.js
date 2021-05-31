import {fizservice, jurservice} from "../../defaults/fizservice";
import Modal from "../modal/Modal"
import {useRouter} from 'next/router'
import InputMask from 'react-input-mask'
import { useEffect } from "react";
const CodeModal = ({
  isModalOpen,
  closeModal,
  code,
  setCode,
  onFirstStep,
  getIdentification,
  error
}) => {
  const router = useRouter()

  const changeCode = (e) => {
    setCode(e.target.value)
    const value = e.target.value.replace(/ /g,"")
    if(value.length === 4) {
      setTimeout(() => {
        onFirstStep(e.target.value)
        // console.log('hello')
      },10)
    }
  } 
  return (
    <div>
      <Modal isOpen={isModalOpen}>
        <div className='modalka_content'>
          <h3>На ваш номер отправлен  4 значный код</h3>
          <form className='form_register'>
            <span onClick={() => closeModal()} className='closebtn'>✖</span>
            <InputMask
              mask="9999"
              maskChar=" "
              name='phone'
              type='tel'
              placeholder='Введите код'
              onChange={e => changeCode(e)}
              value={code}
              className="my-input"/>
              <p className='danger'>{error}</p>
          </form>

          {/* <a href='/getservice' onClick={() => onFirstStep()}>
            <div className='button'>Отправить код</div>
          </a> */}

          <input
          className='singlebtn'
          type='submit'
          onClick={(values) => getIdentification(values)}
          className='button button--light'
          value='Отправить код заново'/>
        </div>
      </Modal>
    </div>
  )
}

export default CodeModal;