import {useRouter} from 'next/router'
import ModalService from './ModalService'
const ServiceList = ({list, type, setModal, setId, modal, closeModal, id, modalType}) => {
    const router = useRouter()
    const onServiceClick =(index) => {
        if(modalType) {
          setModal(type)
          setId(index+1)
        }else {
          setModal(true)
       
          setId(index+1)
        }
    }
    return(
        <div className='services--lists'>
          
        <ModalService isModalOpen={modal} closeModal={closeModal} id={id} type={type}/>
          {list.map((f,index) => (
            <div onClick={() => onServiceClick(index)} data-id={index+1} className='services--list'>
              
              {type === 'fiz' &&  <img alt='image' className='service_icon' src={`/img/uslugi_new/fiz${index+1}.svg`} />}
              {type === 'jur' &&  <img alt='image' className='service_icon' src={`/img/uslugi_new/jur${index+1}.svg`} />}
              <span>{f.name}</span>
              {router.pathname==='/' && <img alt='image' className='path' src='/img/uslugi/line.svg'/>}
            </div>
          ))}
        </div>
    )
}
export default ServiceList