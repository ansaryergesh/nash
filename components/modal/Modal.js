import { CSSTransition, TransitionGroup } from "react-transition-group";
import {Router, useRouter} from 'next/router'
import { useEffect } from "react";
const Modal = (props) => {
  const router = useRouter()
  const close = (e) => {
    e.preventDefault()
    const name = e.target.dataset.name
    if (props.onClose && name==='modalka_block') {
      props.onClose();
    }
  }
  useEffect(() => {
    if(props.isOpen) {
      document.documentElement.style.height= '100%';
      document.body.style.overflowY= 'hidden';
      console.log('true')
    }
    if(!props.isOpen) {
      document.body.style.overflowY= 'unset';
      console.log('false')
    }
    
    document.body.style.overflowX= 'hidden';
  }, [props.isOpen])
  if (props.isOpen === true) {
    return (
      <div data-name='modalka_block' className={`modalka_block ${router.pathname === '/dlya-fizicheskix-lic' && 'modalka_code'}`} onClick={e => close(e)}>
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