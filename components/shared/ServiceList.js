import {useRouter} from 'next/router'
const ServiceList = ({list, type, setModal, setId}) => {
    const router = useRouter()
    const onServiceClick =(index) => {
        setModal(true)
        setId(index+1)
        console.log(parseInt(index) + 1)
    }
    return(
        <div className='services--lists'>
          {list.map((f,index) => (
            <div onClick={() => onServiceClick(index)} data-id={index+1} className='services--list'>
              
              {type === 'fiz' &&  <img className='service_icon' src={`/img/uslugi/${index+1}.svg`} />}
              {type === 'jur' &&  <img className='service_icon' src={`/img/uslugi/yur${index+1}.svg`} />}
              <span>{f.name}</span>
              {router.pathname==='/' && <img className='path' src='/img/uslugi/line.svg'/>}
            </div>
          ))}
        </div>
    )
}
export default ServiceList