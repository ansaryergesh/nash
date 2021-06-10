import Nav from "./Nav"

const Header = () => {
  return (
    <div>
      <div className='header'>
        <Nav/>
        <div className='header--banner'>

          <div className='banner_block'>
            <p className='title'>Решения любых 
              <span> юридических задач</span>
            </p>
            <div className='header--banner--content'>
              <div className='banner_item'>
                <h1>Сначала результат плати потом</h1>
              </div>
              <div className='banner_item'>
                <h1>Платишь только за результат!</h1>
              </div>
              <div className='banner_item'>
                <div className='discount'>
                  {/* <img alt='image' src='/img/discount.png'/> */}
                  <p>-50%
                    <span>СКИДКА</span>
                  </p>
                </div>
              </div>
              <div className='banner_item'>

                <img alt='image' className='vesi vesi_desk' src='/img/vesi.png'/>
                <img alt='image' className='vesi vesi_mobile' src='/img/vesi2.png'/>
              </div>

            </div>

            <a href='/uslugi' className='btn-home'>Заказать услугу</a>
          </div>

        </div>

        {/* <div className='bgs'></div>
      <div className='bg'></div>
      <div className='logoBg'></div> */}

        {/* <div className='container'>
        <div className=' home--content'>
          <p className='first'>
            «NASH Company» – единственная в Казахстане инновационная ЮРТЕХ компания, которая
            специализируется в области решения практически любых юридических задач.
          </p>
          <div className='second'>
            <h3>Услуги физическим лицам</h3>
            <p>
              Наши специалисты создали продукт, благодаря которому Вам предоставляется
              эксклюзивная возможность в онлайн режиме, из любой точки РК, общаться со своими
              юристами, заказывать и получать необходимые услуги, оплачивать их с
              использованием различных форм электронных платежей, за счет, чего мы значительно
              снизили стоимость.</p>
          </div>
        </div>

      </div> */}
      </div>

      <div className='header--banner2'>
        <img alt='image' src='/img/shape.png'/>
        <img alt='image' className='shape2' src='/img/shape2.png'/>
        <div className='content'>
          <h2>NASH <br></br>COMPANY</h2>
          <p>«NASH Company» – единственная в Казахстане инновационная ЮРТЕХ компания,
            которая специализируется в области решения практически любых юридических задач.
          </p>
        </div>
      </div>
    </div>
  )
}
export default Header