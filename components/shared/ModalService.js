import {fizservice, jurservice} from "../../defaults/fizservice";
import Modal from "../modal/Modal"
import {useRouter} from 'next/router'
import Router from 'next/router'
const ModalService = ({isModalOpen, closeModal, id, type}) => {
  const router = useRouter()
  const typeFile = type === 'fiz'
    ? fizservice
    : jurservice
  const typeText = typeFile.find(x => x.id == id)
  const getService = () => {
    // setTimeout(() => window.scroll(0, 0), 10);
    // closeModal()
    if(type === 'fiz') {
      router.push({pathname: '/getservice', scrollreset: true})
      // Router.push('/getservice').then(() => window.scrollTo(0, 0));
    }else {
      Router.push('/jurservice').then(() => window.scrollTo(0, 0));
    }
  }
  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={() => closeModal()}>
        <div className='modalka_content'>
          <div className='modalka_top'>
            <h2>{typeText && typeText.name!==undefined? typeText.name:  ''}</h2>
            {type === 'fiz' && <img src={`/img/uslugi/${id}.svg`}/>}
            {type === 'jur' && <img src={`/img/uslugi/yur${id}.svg`}/>}
            <img className='line' src='/img/uslugi/line.svg' />
          </div>

          <p>
            Наши специалисты создали продукт, благодаря которому Вам предоставляется
            эксклюзивная возможность в онлайн режиме
          </p>

          <a href='/getservice' onClick={() => getService()}><div className='button'>Получить услугу</div></a>
        </div>
      </Modal>
    </div>
  )
}

export default ModalService;