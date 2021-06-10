import Head from 'next/head'
import {useState} from 'react'
import Feedback from '../components/shared/Feedback'
import Header from '../components/shared/Header'
import ModalService from '../components/shared/ModalService'
import Nav from '../components/shared/Nav'
import ServiceList from '../components/shared/ServiceList'
import {fizservice, jurservice} from '../defaults/fizservice'

export default function Home() {
  const [modal,
    setModal] = useState(false)
  const [id,
    setId] = useState()
  const closeModal = () => {
    setModal(false)
  }
  const [type,setType] = useState('fiz')
  const listofservice = type==='fiz' ? fizservice : jurservice
  return (
    <div className='home'>
      <Head>
        <title>
          Nash Company - Решаемо все!
        </title>
      </Head>
      <Header/>
      <div className='container'>
       
        {/* <div className='ads'>
          <div className='ads--content'>
            <h1>Оплати за результат сразу но со скидкой</h1>
            <p>Акция!
              <br></br>
              <span>Прямо сейчас стоимость<br></br>
                200 тыс тенге — 50 тыс. Тенге</span>
            </p>
          </div>

          <div className='buttons'>
          <a href='/dlya-fizicheskix-lic'><input type='button' className='button' value='Физические лица'/></a>
          <a href='/jurservice'><input type='button' className='button button_light' value='Юридические лица '/></a>
          </div>
        </div> */}

        {/* <div className='whyus'>
          <div className='whyus--item'>
            <div className='whyus--images'>
              <img className='image1' src='/img/plant.png'/>
              <img className='image2' src='/img/logo/whiteLogo.svg'/>
              <img className='image3' src='/img/logo/logoSmall.svg'/>
            </div>
            <div className='whyus--content'>
              <p className=''>Почему мы?</p>
              <h2>С начало результат потом оплата</h2>
              <p>
                Наши специалисты создали продукт, благодаря которому Вам предоставляется
                эксклюзивная возможность в онлайн режиме, из любой</p>
            </div>
          </div>

          <div className='whyus--item'>
            <div className='whyus--content'>
              <h2>95% грантии<br></br>
                успеха дела</h2>
              <p>
                Наши специалисты создали продукт, благодаря которому Вам предоставляется
                эксклюзивная возможность в онлайн режиме, из любой</p>
            </div>

            <div className='whyus--images'>
              <img className='image1' src='/img/cubok.png'/>
              <img className='image2' src='/img/logo/whiteLogo.svg'/>
              <img className='image3' src='/img/logo/logoSmall.svg'/>
            </div>
          </div>

          <div className='whyus--item'>
            <div className='whyus--images'>
              <img className='image1' src='/img/sheet.png'/>
              <img className='image2' src='/img/logo/whiteLogo.svg'/>
              <img className='image3' src='/img/logo/logoSmall.svg'/>
            </div>
            <div className='whyus--content'>
              <h2>Защита ваших интересов на высоком уровне!</h2>
              <p>
                Наши специалисты создали продукт, благодаря которому Вам предоставляется
                эксклюзивная возможность в онлайн режиме, из любой</p>
            </div>
          </div>

        </div> */}
      
      <Feedback/>
        <div className='services'>
        <ul className='advantage'>
          <li className='advantage--item'><img src='/img/advantage1.svg'/>
            <p>95% выигранных
              <br></br>
              дел</p>
          </li>
          <li className='advantage--item'><img src='/img/advantage2.svg'/>
            <p>Более 10 лет<br></br>
              на рынке</p>
          </li>
          <li className='advantage--item'><img src='/img/advantage3.svg'/>
            <p>Работаем по<br></br>
              всему РК</p>
          </li>
        </ul>
          <div className='services--header'>
            <span className={type==='fiz' && 'active'} onClick={() => setType('fiz')}>Физические лица</span>
            <span className={type==='jur' && 'active'} onClick={() => setType('jur')}>Юридические лица</span>
          </div>
          <ServiceList list={listofservice} type={type} setModal={setModal} setId={setId}/>
          <ModalService isModalOpen={modal} closeModal={closeModal} id={id} type={type}/>
        </div>

        
      </div>
    </div>
  )
}
