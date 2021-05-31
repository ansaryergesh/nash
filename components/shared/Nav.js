import {Container, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from 'react'
import {useRouter} from 'next/router'
import {CSSTransitionGroup} from 'react-transition-group';
const Nav = () => {
  const router = useRouter()
  const [burger,
    setBurger] = useState(false)
  const handleBurger = () => {
    setBurger(!burger)
  }
  return (
    <div>
      <div className='container'>
        <div className='navigation'>
          <a href='/'>
            <img
              className='logo'
              src={router.pathname === '/'
              ? '/img/logo/logo.svg'
              : '/img/logo/logoBlack.svg'}/>
          </a>
          <div className='navigations'>
            <ul className='navigation--contacts'>
              <li>
                <img src='/img/phone.svg'/>
                +7 777 777 77 77</li>
              <li>
                <a href='#'>
                  <img src='/img/insta.svg'/>
                </a>
              </li>

              <li>
                <a href='#'>
                  <img src='/img/facebook.svg'/>
                </a>
              </li>

            </ul>
            <ul className='navigation--menu'>
              <li>
                <a href='/about'>О компании</a>
              </li>
              <li>
                <a href='/uslugi'>Услуги</a>
              </li>
              <li>
                <a href='/praktika'>Практика</a>
              </li>
              <li>
                <a href='/news'>Пресс-центр</a>
              </li>
              <li>
                <a href='contacts'>Контакты</a>
              </li>
            </ul>

          </div>

        </div>

        <div className='navigation_mobile'>
          <input
            type="checkbox"
            name="main-nav"
            onClick={() => handleBurger()}
            checked={burger}
            id="main-nav"
            class="burger-check"/>

          <div onClick={() => handleBurger()} className='burger'>
            <span></span>
          </div>
          <a href='/'>
            <img className='logo' src='/img/logo/logoBlack.svg'/>
          </a>
          {burger &&   <div className='navigations'>
          <ul className='navigation--menu'>
            <li><a href='/about'>О компании</a></li>
            <li><a href='/uslugi'>Услуги</a></li>
            <li><a href='/praktika'>Практика</a></li>
            <li><a href='/news'>Пресс-центр</a></li>
            <li><a href='contacts'>Контакты</a></li>
          </ul>
          <ul className='navigation--contacts'>
            <li>
              <img src='/img/phone.svg'/>
              +7 777 777 77 77</li>
            <li>
              <a href='#'>
                <img src='/img/insta.svg'/>
              </a>
            </li>

            <li>
              <a href='#'>
                <img src='/img/facebook.svg'/>
              </a>
            </li>

          </ul>
         

          </div>}
        

        </div>
      </div>
    </div>
  )

}

export default Nav;