import {useRouter} from 'next/router'
import {useDispatch} from 'react-redux'
import cookie from 'js-cookie'
import Router from 'next/router'
const CabinetNav = () => {
  const router = useRouter()
  const pathname = router.pathname;
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch({type: 'LOGOUT_USER'})
    cookie.remove('token')
    setTimeout(() => {
      Router.push('/login')
    }, 300)
  }
  return (
    <div className='cabinetnav'>
      <div className='descnav'>
        <a href='/cabinet' className={pathname === '/cabinet' && 'active'}>
          <i className='fa fa-user active'></i>Профиль</a>

        <a
          href='/cabinet/requests'
          className={pathname === '/cabinet/requests'
          ? 'active pulsed_link'
          : 'pulsed_link'}>
          <div className='pulsing_block'>
            <div className={pathname === '/cabinet/request' ? 'pulsing ' : 'pulsing d-none'}>
              <div className="ringring"></div>
              <div className="circle"></div>
            </div>
          </div>
          <i className="fa fa-file-text-o"></i>Мои заявки</a>
        <a href='#'>
          <i className="fa fa-plus-square"></i>Новая заявка</a>
        {/* <a href='#'>
          <i className="fa fa-cog"></i>Настройка</a> */}
        <a onClick={() => onLogout()}>
          <i className="fa fa-power-off" aria-hidden="true"></i>
          Выйти</a>
      </div>

      <div className='mobnav'>
        <a href='/cabinet'  className={pathname === '/cabinet' && 'active'}>
          <i className='fa fa-user active'></i>Профиль</a>

        <a
          href='/cabinet/requests'
          className={pathname === '/cabinet/requests'
          ? 'active pulsed_link'
          : 'pulsed_link'}>
          <div className='pulsing_block'>
            <div className={pathname === '/cabinet/request' ? 'pulsing d-none' : 'pulsing'}>
              <div className="ringring"></div>
              <div className="circle"></div>
            </div>
          </div>
          <i className="fa fa-file-text-o"></i>Мои заявки</a>
        <a href='#'>
          <i className="fa fa-plus-square"></i>Новая заявка</a>
        {/* <a href='#'>
          <i className="fa fa-cog"></i>Настройка</a> */}
        <a onClick={() => onLogout()}>
          <i className="fa fa-power-off" aria-hidden="true"></i>
          Выйти</a>
      </div>
    </div>
  )
}
export default CabinetNav