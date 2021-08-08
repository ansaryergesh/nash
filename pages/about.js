import Nav from "../components/shared/Nav"
import {useRouter} from 'next/router'
import Head from 'next/head'
const About = () => {
  const router = useRouter()

  const renderForm = () => {
    
  }
  return (
    <div className='about'>
      <Head>
        <title>О компании</title>
      </Head>
      <div className='header'>

        <div className='bg2'></div>
        <div className='bg'></div>
        <Nav/>
        <div className='container'>
          <div className='header--content '>
            <h1>Nash
              <br></br>company</h1>
            <p>Наши специалисты создали продукт, благодаря которому Вам предоставляется
              эксклюзивная возможность в онлайн режиме, из любой точки РК, общаться со своими
              юристами, заказывать и получать необходимые услуги, оплачивать их с
              использованием различных форм электронных платежей, за счет, чего мы значительно
              снизили стоимость.<br></br>
              <br></br>
              Наша компания оградит Вас от самостоятельного хождения по различным инстанциям.
              МЫ в режиме онлайн сможем осуществить данные услуги за Вас.</p>

          </div>
          <div className='buttons'>
            <a href='/dlya-fizicheskix-lic'><input type='button' onClick={() => renderForm()} className='button' value='Физические лица'/></a>
            <a href='jurservice'><input type='button' onClick={() => renderForm()} className='button button--light' value='Юридические лица'/></a>
          </div>
        </div>

      </div>
      <div className='container'>
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

        <ul className='advantage_block'>
          <li className='advantage--item'>
            <div className='advantage--img'>
              <img src='/img/advantage1.svg'/>
            </div>
            <p>95% выигранных дел</p>
          </li>
          <li className='advantage--item'>
            <div className='advantage--img'>
              <img src='/img/advantage2.svg'/>
            </div>
            <p>Более 10 лет на рынке</p>
          </li>
          <li className='advantage--item'>
            <div className='advantage--img'>
              <img src='/img/advantage3.svg'/>
            </div>
            <p>Работаем по всему РК</p>
          </li>
        </ul>

        <div className='practice'>
          <div className='practice--top'>
          <div className='practice_item'>
            <span>
              За <b>10 лет</b> практики
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
          <p className='practice--text'>
            С 2008 года наши эксперты работают с различными отраслями права, участвуют в
            научных конференциях, проводят семинары и постоянно совершенствуют свои навыки.
            Мы выработали индивидуальный, авторский подход для решения юридических задач
            любой сложности.
          </p>
          <p className='practice--bigtext'>
            В своей работе мы ориентированы на открытость, актуальность, индивидуальность и
            законность. Приоритетом в нашей работе является достижение положительного
            результата, основанного на интересах и целях наших Доверителей.
            <br></br>
            NASH Company занимается оказанием юридических услуг физическим и юридическим
            лицам более 11 лет и работает на высшем уровне по РК и СНГ.
            <br></br>
            <br></br>
            Мы имеем огромный опыт в решении юридических конфликтов любой сложности и знаем
            о том, что многие дела не терпят отлагательств и промедлений.
            <br></br>
            <br></br>
            Независимо от того, нужна вам помощь при разводе, оформлении наследства,
            приватизации земельного участка, перепланировке нежилого помещения или переводе
            его из жилого в нежилое, наша команда экспертов возьмется за работу в кратчайшие
            сроки, окажет услуги в области взыскания просроченной дебиторской задолженности
            на досудебной и судебной стадиях, с дальнейшим исполнительным производством.
            <br></br>
            <br></br>
            Мы всегда готовы взяться за самые сложные юридические споры и помочь вам в любой
            ситуации. Вы бизнесмен? Тогда мы с радостью окажем вам услуги юридического
            сопровождения бизнеса! У вас есть какие-то вопросы? Не можете решить, как лучше
            поступить? Напишите нам, консультация от экспертов NASH Company будет оказана
            вам в полном объеме.
          </p>

          <div className='practice--banner'>
            <div className='practice--banner--content'>
            <h2>Наша <br></br>практика</h2>
            <p>Качество юридических услуг подтверждено списком выигранных дел и счастливыми
              клиентами. За долгие годы юридической практики компания заработала деловую
              репутацию, уважение и доверие клиентов.</p>
            </div>
            <img src='/img/sot.png' />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About;