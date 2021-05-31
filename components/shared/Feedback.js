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
          <h3>Иван Иванов</h3>
          <span>Companyname</span>
          <p>«NASH Company» – единственная в Казахстане инновационная ЮРТЕХ компания,
            которая специализируется в области решения практически любых юридических задач.</p>
        </div>
        <div className='feedback_text'>
          <h3>Иван Иванов</h3>
          <span>Companyname</span>
          <p>«NASH Company» – единственная в Казахстане инновационная ЮРТЕХ компания,
            которая специализируется в области решения практически любых юридических задач.</p>
        </div>
        <div className='feedback_text'>
          <h3>Иван Иванов</h3>
          <span>Companyname</span>
          <p>«NASH Company» – единственная в Казахстане инновационная ЮРТЕХ компания,
            которая специализируется в области решения практически любых юридических задач.</p>
        </div>
        <div className='feedback_text'>
          <h3>Иван Иванов</h3>
          <span>Companyname</span>
          <p>«NASH Company» – единственная в Казахстане инновационная ЮРТЕХ компания,
            которая специализируется в области решения практически любых юридических задач.</p>
        </div>
      </Slider>
    </div>
  )
}

export default Feedback