const Footer = () => {
  return(
    <div className='container'>
      <div className='footer'>
        <div className='footer--top'>
          <div className='footer--logo'>
            <a href='/'><img src='/img/logo/logoBlack.svg' /> </a>
            <h4>Решаемо все!</h4>
          </div>
 

          <ul>
            <li><span>Следуй за нами</span></li>
            <li><a href='#'><i className='fa fa-facebook' /></a></li>
            <li><a href='#'><i className='fa fa-instagram' /></a></li>
          </ul>
        </div>
        <div className='footer--links'>
          <p>Copyright 2021 © NASH company - все права защищены</p>
          <ul>
            <li><a href='/about'>О компании</a></li>
            <li><a href='/uslugi'>Услуги</a></li>
            <li><a href='/praktika'>Практика</a></li>
            <li><a href='/news'>Пресс центр</a></li>
            <li><a href='#'>Отзывы</a></li>
            <li><a href='/contacts'>Контакт</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer