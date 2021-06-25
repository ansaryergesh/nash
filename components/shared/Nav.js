import {Container, Row, Col} from 'reactstrap';
import "bootstrap/dist/css/bootstrap.css";
import React, {useEffect, useState} from 'react'
import {useRouter} from 'next/router'
import {slide as Menu} from "react-burger-menu";
import {CSSTransitionGroup} from 'react-transition-group';
import Link from 'next/link'
import {connect} from 'react-redux'
import cookie from 'js-cookie'
import axios from 'axios';
import {getInitials} from '../../defaults/extraFunction';
const mapStateToProps = ({
  userReducer: {
    user,
    loggedIn
  }
}) => ({user, loggedIn});

const AppLink = ({children, className, href}) => <Link href={href}>
  <a className={className}>{children}</a>
</Link>

const Nav = (props) => {
  const [isActiveUser,
    setActiveUser] = useState(false)
  const isCurrentUser = cookie.get('token') && props.loggedIn
    ? true
    : false

  useEffect(() => {
    console.log('checking' + props.loggedIn)
    if (props.loggedIn) {
      setActiveUser(true)
    }
  }, [props.loggedIn])

  const router = useRouter()
  const [burger,
    setBurger] = useState(false)
  const handleBurger = () => {
    setBurger(!burger)

  }

  useEffect(() => {
    if (!burger) {
      document.documentElement.style.height = '100%';
      document.body.style.overflowY = 'hidden';
    }
    if (burger) {
      document.body.style.overflowY = 'unset';
    }
  }, [burger])

  return (
    <div>
      <div className='container'>
        <div className='navigation'>
          <AppLink href='/'>
            <img
              alt='image'
              className='logo'
              src={router.pathname === '/'
              ? '/img/logo/logoBlack.svg'
              : '/img/logo/logoBlack.svg'}/>
          </AppLink>
          <div className='navigations'>
            <ul className='navigation--contacts'>
              <li>
                <img alt='image' src='/img/phone.svg'/>
                <a href='tel:+77003505000'></a>+7 700 350 50 00</li>
              <li>
                <a target='_blank' href='https://www.instagram.com/nashcompany.kz/'>
                  <img alt='image' src='/img/insta.svg'/>
                </a>
              </li>

              <li>
                <a href='#'>
                  <img alt='image' src='/img/facebook.svg'/>
                </a>
              </li>

              <li className='pulsed_link'>
                {((isActiveUser || isCurrentUser) && !router.pathname.includes('cabinet')) &&  <div className='pulsing_block'>
                <div class="pulsing">
                  <div class="ringring"></div>
                  <div class="circle"></div>
                </div>
                </div>}
                <a
                  className='user_icon'
                  href={isActiveUser
                  ? '/cabinet'
                  : '/login'}>
                  <img alt='image' src='/img/user_icon.svg'/> {(isActiveUser || isCurrentUser) && `${getInitials(props.user.fio)}`}
                </a>
              </li>

            </ul>
            <ul className='navigation--menu'>
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
                <AppLink href='/news'>Пресс-центр</AppLink>
              </li>

              <li>
                <AppLink href='/contacts'>Контакты</AppLink>
              </li>
              <li>
                <a href='/ПУБЛИЧНАЯ ОФЕРТА.pdf' target='_blank'>Публичная оферта</a>
              </li>

            </ul>

          </div>

        </div>
        <div className='navigation_mobile'>
          <Menu {...props} onStateChange={() => handleBurger()}>

            <AppLink className="menu-item" href="/">
              Главная страница
            </AppLink>

            <AppLink className="menu-item" href="/about">
              О компании
            </AppLink>
            <AppLink className="menu-item" href="/uslugi">
              Услуги
            </AppLink>
            <AppLink className="menu-item" href="/praktika">
              Практика
            </AppLink>
            <AppLink
              className="menu-item"
              href={isActiveUser
              ? '/cabinet'
              : '/login'}>
              Личный кабинет
            </AppLink>

            <AppLink className="menu-item" href="/news">
              Пресс-центр
            </AppLink>
            <AppLink className="menu-item" href="/contacts">
              Контакты
            </AppLink>
            <a href='/ПУБЛИЧНАЯ ОФЕРТА.pdf' className="menu-item" target='_blank'>Публичная оферта</a>
            <hr></hr>
            <a href='tel:+77003505000' className="menu-item">
              <i className='fa fa-phone'></i>+7 700 350 50 00
            </a>
            <div className='socials'>
              <a
                className="menu-item"
                target='_blank'
                href='https://www.instagram.com/nashcompany.kz/'>
                <i className='fa fa-instagram'></i>
              </a>
              <a className="menu-item" href='#'>
                <i className='fa fa-facebook'></i>
              </a>
              <p className='menu-item address'>
                <i className='fa fa-map-marker'></i>
                <span>г. Алматы. Ул. Толе би 101 БЦ "Толе би"
                </span>
              </p>
            </div>

          </Menu>
          <a className='mob_phone' href='tel:+77003505000'>+7700 350 5000</a>
          <a href='/'>
            <img alt='image' className='logo' src='/img/logo/justlogo.png'/>
          </a>

        </div>
      </div>
    </div>
  )

}

export default(connect(mapStateToProps, null)(Nav));