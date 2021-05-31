import { CSSTransition, TransitionGroup } from "react-transition-group";
import {useRouter} from 'next/router'
const Modal = (props) => {
  const router = useRouter()
  const close = (e) => {
    e.preventDefault()
    const name = e.target.dataset.name
    console.log(name)
    if (props.onClose && name==='modalka_block') {
      props.onClose();
    }
  }
  if (props.isOpen === true) {
    return (
      <div data-name='modalka_block' className={`modalka_block ${router.pathname === '/getservice' && 'modalka_code'}`} onClick={e => close(e)}>
        <div  className='modalka_body'>
          {props.children}
        </div>
      </div>
    )
  } else {
    return null
  }
}

export default Modal