import {useState} from "react"
import ModalService from "../components/shared/ModalService"
import Nav from "../components/shared/Nav"
import ServiceList from "../components/shared/ServiceList"
import {fizservice, jurservice} from "../defaults/fizservice"
import Head from 'next/head'
const Uslugi = () => {
  const [modal,
    setModal] = useState(false)
  const [id,
    setId] = useState()
  const closeModal = () => {
    setModal(false)
  }
  return (
    <div className='uslugi'>
      <Head>
        <title>
          Услуги
        </title>
      </Head>
      <ModalService isModalOpen={modal} closeModal={closeModal} id={id} type='fiz'/>
      <div className='header'>
        <div className='bg'></div>
        <Nav/>
        <div className='header--content'>
          <h2>Получить
            <br></br>услугу:</h2>
          <div className='content_buttons'>
          <a href='/getservice'><input className='button' value='Физические лица' type='button'/></a>
          <a href='/jurservice'> <input className='button button--light' value='Юридические лица' type='button'/></a>
          </div>
        </div>
      </div>
      <div className='uslugi--list container'>

        <div className='services'>
          <h2>Услуги физическим лицам</h2>
          <ServiceList list={fizservice} type='fiz' setModal={setModal} setId={setId}/>

          <h2>Услуги юридическим лицам</h2>
          <ServiceList list={jurservice} type='jur' setModal={setModal} setId={setId}/>
        </div>
      </div>
    </div>
  )
}

export default Uslugi;