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
  useEffect(() => {
    if(isModalOpen) {
      const input = document.querySelector(".code_input");
      input.focus()
    }
  }, [isModalOpen])
  return (
    <div>
      <Modal isOpen={isModalOpen}>
        <div className='modalka_content'>
          <h3>На ваш номер отправлен  4 значный код</h3>
          <form className='form_register'>
            {/* <span onClick={() => closeModal()} className='closebtn'>✖</span> */}
            <InputMask
              mask="9999"
              maskChar={null}
              name='phone'
              type='tel'
              placeholder='Введите код'
              onChange={e => changeCode(e)}
              value={code}
              className="my-input code_input"/>
              <p className='danger'>{error}</p>
          </form>

          <input
          type='submit'
          onClick={() => getIdentification()}
          className='button button--light code_button'
          value='Отправить код заново'/>
          <input
          type='button'
          onClick={() => closeModal()}
          // className='button'
          className='button button--light code_button'
          value='Отмена'/>
        </div>
      </Modal>
    </div>
  )
}

export default CodeModal;