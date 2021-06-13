import React, {useEffect} from 'react'
import Slider from "react-slick";
import $ from 'jquery'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Feedback = () => {
  useEffect(() => {
    var stHeight = $('.slick-track').height(),
      timeout = false, // holder for timeout id
      delay = 250; // delay after event is "complete" to run callback

    function refreshSlickHeight() {
      $('.slick-slide').css('height', stHeight + 'px');
    }

    // window.resize event listener
    window
      .addEventListener('resize', function () {
        // clear the timeout
        clearTimeout(timeout);
        // start timing for event "completion"
        timeout = setTimeout(refreshSlickHeight, delay);
      });
  }, [])
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 4800,
    arrows: false,
    dots: false,
    className: 'feedback_block',
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 520,
        settings: {
          slidesToShow: 1
        }
      }, {
        breakpoint: 380,
        settings: {
          slidesToShow: 1
        }

      }
    ]
  };
  return (
    <div className='feedbacks'>
      <h2>Отзывы наших клиентов</h2>

      <Slider {...settings}>
        <div className='feedback_text'>
          <h3>Куат Салтанат
          </h3>
          {/* <span>Companyname</span> */}
          <p>Хочу выразить благодарность Юристам компании за профессионализм, доступность
            и оперативность. Работу выполнили качественно быстро, а самое главное БЕСПЛАТНО.
            Рекомендую эту компанию, поможет и составит правильно документацию, объясняют
            все доходчиво.
          </p>
        </div>
        <div className='feedback_text'>
          <h3>Мельников Владимир
          </h3>
          {/* <span>ТК</span> */}
          <p>Обратился за консультацией в компанию Nashcompany, был ошарашен, тем как
            оперативно работают, составили очень грамотно исковое заявление. Меня попросили
            прислать все имеющиеся документы, задавали вопросы и чётко объясняли весь
            процесс, который мне придётся пройти. Объясняли абсолютно всё до мельчайших
            подробностей И за это я очень-очень благодарен. Спустя время ситуацию, которая
            длилась месяц, удалось решить в мою пользу.</p>
        </div>
        <div className='feedback_text'>
          <h3>Маратова Ильмира </h3>
          {/* <span>Companyname</span> */}
          <p>Я лично плохо понимаю юр.сферу, но после обращения в nashcompany мне все разложили по полочкам и рассказали что и как нужно делать. Обращалась по поводу задолжности. Так же получала отчет о каждом действии. Результат был на моей стороне. Деньги потратила только на дорогу. Оказали услугу абсолютно Бесплатно. Очень довольна компанией</p>
        </div>
        <div className='feedback_text'>
          <h3>ТОО «AAA Group» </h3>
          {/* <span>Companyname</span> */}
          <p>ТОО «AAA Group» выражает свою благодарность юристам ТОО «Nashcompany» за предоставленные услуги. Во время предоставления услуг компания показала свою способность и с полной ответственностью отнеслась к поставленным задачам, выполняла работу качественно и быстро. Процесс работы проходил ОНЛАЙН, что очень выгодно и в нашу пользу. Смело можем порекомендовать компанию для сотрудничества с другими компаниями.</p>
        </div>
      </Slider>
    </div>
  )
}

export default Feedback