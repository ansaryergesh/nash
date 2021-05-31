import Nav from "./Nav"

const Header = () => {
  return (
    <div className='header'>
      <div className='bgs'></div>
      <div className='bg'></div>
      <div className='logoBg'></div>
      <Nav/>
      <div className='container'>
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

      </div>
    </div>
  )
}
export default Header