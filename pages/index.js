import Head from 'next/head'
import {useState} from 'react'
import Feedback from '../components/shared/Feedback'
import Header from '../components/shared/Header'
import ModalService from '../components/shared/ModalService'
import Nav from '../components/shared/Nav'
import ServiceList from '../components/shared/ServiceList'
import {fizservice, jurservice} from '../defaults/fizservice'
import Router from 'next/router'
export default function Home() {
  const [modal,
    setModal] = useState(false)
  const [id,
    setId] = useState()
  const closeModal = () => {
    setModal(false)
  }

  const routeUslug = () => {
    Router.push('/uslugi')
  }
  const [type,
    setType] = useState('fiz')
  const listofservice = type === 'fiz'
    ? fizservice
    : jurservice
  return (
    <div className='home'>
      <Head>
        <title>
          Nash Company - Решаемо все!
        </title>
      </Head>
      <div className='header'>
        <div className='bg'></div>
        <Nav/>
      </div>
      {/* </> */}
      <div className='body'>
        <div className='container'>
          <div className='body__top'>
            <h2 className='text-center'>Решение любых юридических задач</h2>
            <div className='body__blocks'>
              <div onClick={() => routeUslug()} className='body__block'>
                <span>Получи услугу
                  <b> онлайн</b>
                </span>
                <p>Получи услугу
                  <b> онлайн
                  </b> не обязательно выезжать</p>
              </div>
              <div onClick={() => routeUslug()}  className='body__block'>
                <span>Оплата
                  <b> после</b>
                  <span>достижения <b>
                      результата</b>
                  </span>
                </span>
                <p>Плата в конце сделки, получения результата</p>
              </div>
              <div onClick={() => routeUslug()} className='body__block'>
                <span>Получи
                  <b> сейчас</b>
                  <span>
                    плати потом</span>
                </span>
                <p>Сначала услуга потом оплата</p>
              </div>

            </div>

            <div className='body__btn'>
              <p className='text-center' onClick={() => Router.push('/uslugi')}>Получить 50% скидки</p>
            </div>

            <div className='body__auction text-center'>
              <span>Акция
                <b>-50% скидка на все услуги</b>
              </span>
            </div>

          </div>

          <div className='services'>
            <ul className='advantage'>
              <li className='advantage--item'><img src='/img/advantage1.svg'/>
                <p>95% успешно выигранных
                  <br></br>
                  дел</p>
              </li>
              <li className='advantage--item'><img src='/img/advantage2.svg'/>
                <p>Более 10 лет<br></br>
                  на рынке РК</p>
              </li>
              <li className='advantage--item'><img src='/img/advantage3.svg'/>
                <p>Работаем по<br></br>
                  всему РК</p>
              </li>
            </ul>
            <div className='howwork'>
              <h2 className='text-center'>Как мы работаем?</h2>
              <div className='howwork__lists'>
                <div className='howwork__list'>
            
                  <div className='circle_block'>
                    <div className='circle'></div>
                  </div>
                  <b>Вы оставляете <p className='d-block'>заявку на сайте</p></b>
                </div>
                <div className='howwork__list'>
                <div className='circle_block'>
                    <div className='circle'></div>
                  </div>
                  <b>Вам звонит Юрист <span>и консультирует</span> </b>
                </div>
                <div className='howwork__list'>
                <div className='circle_block'>
                    <div className='circle'></div>
                  </div>
                  <b>Юрист составляет иск</b>
                </div>
                <div className='howwork__list'>
                <div className='circle_block'>
                    <div className='circle'></div>
                  </div>
                  <b>Участие в суде</b>
                </div>
                <div className='howwork__list'>
                <div className='circle_block'>
                    <div className='circle'></div>
                  </div>
                  <b>Вы получаете <p className='d-block'>результат!</p></b>
                </div>
              </div>
              <div className='whyus'>
                
              <h2>Почему мы?</h2>
              <div className='why_blocks'>
                
                <div className='why_block'>
                  <img src='/img/why/why1.png'></img>
                  <p>Получи услугу онлайн</p>
                </div>
                <div className='why_block'>
                <img src='/img/why/why2.png'></img>
                  <p>Полный спектр юридических услуг</p>
                </div>
                <div className='why_block'>
                <img src='/img/why/why3.png'></img>
                  <p>Постоплата (плати в конце результата)</p>
                </div>
                <div className='why_block'>
                <img src='/img/why/why4.png'></img>
                  <p>В штате более 10 опытных специалистов</p>
                </div>
                <div className='why_block'>
                <img src='/img/why/why5.png'></img>
                  <p>У нас дешевле по сравнению с другими компаниями</p>
                </div>
                <div className='why_block'>
                <img src='/img/why/why6.png'></img>
                  <p>Юристы добиваются результата кратчайшие сроки</p>
                </div>
              </div>
              
              </div>
            </div>
            <div className='body'>
            <div className='body__btn'>
              <p className='text-center' onClick={() => Router.push('/uslugi')}>Получить услугу онлайн</p>
            </div>

            <div className='body__auction text-center'>
              <span>Акция
                <b>-50% скидка на все услуги</b>
              </span>
            </div>
            </div>

            <div className='about'>
            <div className='practice'>
          <div className='practice--top'>
          <div className='practice_item'>
            <span>
              За <b>10 лет</b> практика
            </span>
            </div>
            <div className='practice_item'>
              <h1>6083</h1>
              <p>Реализованных дел</p>
              <img src='/img/bigPath.svg'/>
            </div>

            <div className='practice_item'>
              <h1>95%</h1>
              <p>Побед в делах</p>
              <img src='/img/bigPath.svg'/>
            </div>
          </div>
          </div>
            </div>
            <Feedback />
            <div className='services--header'>
              <span className={type === 'fiz' && 'active'} onClick={() => setType('fiz')}>Физические лица</span>
              <span className={type === 'jur' && 'active'} onClick={() => setType('jur')}>Юридические лица</span>
            </div>
            <ServiceList
              list={listofservice}
              type={type}
              setModal={setModal}
              setId={setId}/>
            <ModalService isModalOpen={modal} closeModal={closeModal} id={id} type={type}/>
          </div>

        </div>

      </div>
    </div>
  )
}
