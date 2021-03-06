import Link from 'next/link'
const AppLink = ({children, className, href}) =>
  <Link href={href}>
    <a className={className}>{children}</a>
  </Link>
import {useRouter} from 'next/router'
const Footer = () => {
  const router = useRouter()
  const pathname = router.pathname
  return (
    <div className={`container ${pathname.includes('dogovor') && 'd-none'}`}>
      <div className='footer'>
        <div className='footer--info'>
          <h4>Реквизиты компании</h4>
        
          <div className='footer--info__content'>
            <p>TOO «Nash Company»</p>
            <p>БИН: 100740009653</p>
            <p> Юридический Адрес: Республика Казахстан, </p>
            <p>г. Алматы, ул. Зенкова 22 офис 107</p>
            <p>Фактический адрес: г. Алматы, ул. Толе би 101, 3 этаж, блок E</p>
            <p>Тел: +7 (700) 350 50 00</p>
            <p>Р/сч KZ728560000004207818</p>
            <p>В АО «Банк Центр Кредит»</p>
            <p>БИК KCJBKZKX</p>
            </div>
            <div className='footer--links'>
          <ul>
            <li>
              <AppLink href='/about'>О компании</AppLink>
            </li>
            <li>
              <AppLink href='/uslugi'>Услуги</AppLink>
            </li>
            <li>
              <AppLink href='/praktika'>Практика</AppLink>
            </li>
            <li>
              <AppLink href='/news'>Пресс центр</AppLink>
            </li>
            <li>
              <AppLink href='/feedback'>Оставить отзыв</AppLink>
            </li>
            <li>
              <AppLink href='/contacts'>Контакт</AppLink>
            </li>
          </ul>
          
        </div>
        </div>
        <div className='footer--top'>
          <div className='footer--logo'>
            <AppLink href='/'>
            <img alt='image' src='/img/logo/logoBlack.svg'/> 
            </AppLink>
            <h4>Решаемо все!</h4>
          </div>

          <ul className='footer--social'>
            <li>
              <span>Следуй за нами</span>
            </li>
            <li>
              <a href='https://www.instagram.com/nashcompany.kz/' target='_blank'><img alt='image' src='/img/insta.svg'/></a>
            </li>

            <li>
              <AppLink href='#'><img alt='image' src='/img/facebook.svg'/></AppLink>
            </li>
          </ul>
          <div className='footer--mob'>
            <AppLink href='/'><img alt='image' className='logo' src='/img/logo/logoBlack.svg'/>
            </AppLink>
            <ul className='footer--mob__social'>
            <li>
            </li>
            <li>
              <a href='https://www.instagram.com/nashcompany.kz/' target='_blank'><img alt='image' src='/img/insta.svg'/></a>
            </li>

            <li>
              <a href='#'><img alt='image' src='/img/facebook.svg'/></a>
            </li>
          </ul>
          </div>
          
        </div>
        {/* <div className='footer--links'>
          <p>Copyright 2021 © NASH company - все права защищены</p>
          <ul>
            <li>
              <AppLink href='/about'>О компании</AppLink>
            </li>
            <li>
              <AppLink href='/uslugi'>Услуги</AppLink>
            </li>
            <li>
              <AppLink href='/praktika'>Практика</AppLink>
            </li>
            <li>
              <AppLink href='/news'>Пресс центр</AppLink>
            </li>
            <li>
              <AppLink href='/feedback'>Оставить отзыв</AppLink>
            </li>
            <li>
              <AppLink href='/contacts'>Контакт</AppLink>
            </li>
          </ul>
        </div> */}
      </div>
      
      <p className='copyright text-center'>Copyright 2021 © NASH company - все права защищены</p>
    </div>
  )
}

export default Footer