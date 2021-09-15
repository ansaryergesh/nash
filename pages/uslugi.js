import {useState} from "react"
import ModalService from "../components/shared/ModalService"
import Nav from "../components/shared/Nav"
import ServiceList from "../components/shared/ServiceList"
import {fizservice, jurservice} from "../defaults/fizservice"
import Head from 'next/head'
const Uslugi = () => {
  const [modal,
    setModal] = useState(false)
  const [modal2,setModal2] = useState(false)
  const [id,
    setId] = useState()
  
  const modalChange = (type) => {
    console.log(type)
    if(type === 'fiz') {
      console.log('1')
      setModal(true)
      setModal2(false)
    }
    if(type==='jur') {
      setModal2(true)
      setModal(false)
    }
  }
  const closeModal = () => {
    setModal(false)
    setModal2(false)
    // setModal({modal1:false,modal2:false})
  }
  return (
    <div className='uslugi'>
      <Head>
        <title>
          Услуги
        </title>
      </Head>
      {/* <ModalService isModalOpen={modal} closeModal={closeModal} id={id} type='fiz'/> */}
      <div className='header'>
        <div className='bg'></div>
        <Nav/>
        <div className='header--content'>
          <h1>Получить
            <br></br>услугу:</h1>
          <div className='content_buttons'>
          <a href='/dlya-fizicheskix-lic'><input className='button' value='Антиколлектор' type='button'/></a>
          {/* <a href='/jurservice'> <input className='button button--light' value='Юридические лица' type='button'/></a> */}
          </div>
        </div>
      </div>
      <div className='uslugi--list container'>

        <div className='services'>
          <h2>Услуги физическим лицам</h2>
          <ServiceList modalType="1" modal={modal} closeModal={closeModal} id={id} setType={'fiz'} list={fizservice} type='fiz' setModal={modalChange} setId={setId}/>

          <h2>Услуги юридическим лицам</h2>
          <ServiceList modalType='2' modal={modal2} closeModal={closeModal} id={id} setType={'jur'} list={jurservice} type='jur' setModal={modalChange} setId={setId}/>
        </div>
      </div>
    </div>
  )
}

export default Uslugi;