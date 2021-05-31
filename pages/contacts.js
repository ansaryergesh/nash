import Nav from "../components/shared/Nav";
import Head from 'next/head'
const Contact = () => {
  return (
    <div className='contact'>
      <Head>
        <title>Контакты</title>
      </Head>
      <Nav/>
      <div className='container'>
        <h2>Связаться <br></br>с нами</h2>

        <div className='contact_texts'>
          <div className='contact_text'>
            <p>Наш адрес</p>
            <span>РК, г. Алматы. <br></br>Ул. Толе би 101, <br></br>БЦ "Толе би", 3 этаж, блок D</span>
          </div>

          <div className='contact_text'>
            <p>Телефоны</p>
            <span>
              <a href='tel:+77272501500'>+7 (727) 250-15-00</a>; 
              <br></br><a href='tel:+77024372018 '>+7 (702) 437-20-18</a>
            </span>
          </div>

          <div className='contact_text'>
            <p>Электронный адрес</p>
            <span>
              <a href='mailto:info@nashcompany.kz'>info@nashcompany.kz</a>
            </span>
          </div>

          <div className='contact_text'>
            <p>Режим работы</p>
            <span>Пн-Пт 09:00 — 19:00 <br></br>Сб-Вс 10:00 — 14:00</span>
          </div>
        </div>
      </div>
      <div className='map'>
      <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.874032522479!2d76.92227931544637!3d43.254061779137075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb1531b39b3%3A0x97eb2ec73bccce23!2z0YPQu9C40YbQsCDQotC-0LvQtSDQkdC4IDEwMSwg0JDQu9C80LDRgtGLIDA1MDAxMg!5e0!3m2!1sru!2skz!4v1620702757626!5m2!1sru!2skz" width="100%" height={550} frameBorder={0} style={{border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} />
      {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.874032522479!2d76.92227931544637!3d43.254061779137075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38836eb1531b39b3%3A0x97eb2ec73bccce23!2z0YPQu9C40YbQsCDQotC-0LvQtSDQkdC4IDEwMSwg0JDQu9C80LDRgtGLIDA1MDAxMg!5e0!3m2!1sru!2skz!4v1620702757626!5m2!1sru!2skz" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe> */}
      </div>
    </div>
  )
}

export default Contact;